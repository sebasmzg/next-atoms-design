'use client';

import { ReactNode, useState } from "react";
import { FormGroup } from "../atoms/Form-group";
import { FormTitle } from "../atoms/Form-title";
import { InputText } from "../atoms/Input-text";
import Label from "../atoms/Label";
import { CompaniesService } from "@/services/companies.service";
import { ButtonForm } from "../atoms/Button-form";
import Form from "../molecules/Form";
import { ButtonClose } from "../atoms/Button-close";
import { ICompanyRequest } from "@/utils/models/models";
import { useModal } from "@/hooks/useModal";

type FormCompanyProps = {
  view: string;
  onClose: () => void;
  $buttonClose?: ReactNode;
};

const initialState = {
  name: "",
  location: "",
  contact: "",
};

const companiesService = new CompaniesService();

export const FormCompany = ({ view, onClose,  $buttonClose }: FormCompanyProps) => {
  const [formData, setFormData] = useState<ICompanyRequest>(initialState);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData)=>({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data before form:", formData);
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await companiesService.createCompany(formData);
      onClose();
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
          />
        </FormGroup>
        <FormGroup>
          <ButtonForm $text="Submit" $view={view} />
        </FormGroup>
      </Form>
    </>
  );
};
