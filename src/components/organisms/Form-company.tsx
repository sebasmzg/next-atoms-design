'use client';

import { ReactNode, useEffect, useState } from "react";
import { FormGroup } from "../atoms/Form-group";
import { FormTitle } from "../atoms/Form-title";
import { InputText } from "../atoms/Input-text";
import Label from "../atoms/Label";
import { CompaniesService } from "@/services/companies.service";
import { ButtonForm } from "../atoms/Button-form";
import Form from "../molecules/Form";
import { ICompanyRequest, ICompanyResponse, IVacanciesResponse } from "@/utils/models/models";
import { useRouter } from "next/navigation";

type FormCompanyProps = {
  view: string;
  onClose: () => void;
  $buttonClose?: ReactNode;
  $companyEdit?: ICompanyResponse | undefined;
};

const initialState = {
  name: "",
  location: "",
  contact: "",
};

const companiesService = new CompaniesService();

export const FormCompany = ({ view, onClose,  $buttonClose, $companyEdit }: FormCompanyProps) => {
  const [formData, setFormData] = useState<ICompanyRequest>(initialState);
  const router = useRouter();

  useEffect(()=>{
    if ($companyEdit) {
      setFormData({
        name: $companyEdit.name,
        location: $companyEdit.location,
        contact: $companyEdit.contact,
      });
    }
  },[$companyEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData)=>({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if ($companyEdit){
        await companiesService.updateCompany($companyEdit.id, formData);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const response = await companiesService.createCompany(formData);
      }
      onClose();
      router.refresh();
    } catch (error) {
      console.error("Error creating company: ", error);
    }
  }; 

  return (
    <>
      <Form onSubmit={handleSubmit} >
        { $buttonClose }
        <FormTitle $title="Company" />
        <FormGroup>
          <Label $text="Name" $htmlfor="name" />
          <InputText
            $title="Name"
            $name="name"
            $onChange={handleChange}
            $view={view}
            $type="text"
            $value={formData.name}
          />
        </FormGroup>
        <FormGroup>
          <Label $text="Location" $htmlfor="location" />
          <InputText
            $title="Location"
            $name="location"
            $onChange={handleChange}
            $view={view}
            $type="text"
            $value={formData.location}
          />
        </FormGroup>
        <FormGroup>
          <Label $text="Contact" $htmlfor="contact" />
          <InputText
            $title="Contact"
            $name="contact"
            $onChange={handleChange}
            $view={view}
            $type="text"
            $value={formData.contact}
          />
        </FormGroup>
        <FormGroup>
          <ButtonForm $text={$companyEdit ? "Update" : "Create"} $view={view} />
        </FormGroup>
      </Form>
    </>
  );
};
