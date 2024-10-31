"use client";

import { useEffect, useState } from "react";
import { FormGroup } from "../atoms/Form-group";
import { FormTitle } from "../atoms/Form-title";
import { InputText } from "../atoms/Input-text";
import Label from "../atoms/Label";
import { InputSelect } from "../atoms/InputSelect";
import { ButtonForm } from "../atoms/Button-form";
import Form from "../molecules/Form";
import { VacanciesService } from "@/services/vacancies.service";
import { useAllCompanies } from "@/hooks/useAllCompanies";
import { IVacanciesResponse, IVacancyRequest } from "@/utils/models/models";
import { useRouter } from "next/navigation";

type FormVacancyProps = {
  view: string;
  onClose: () => void;
  $buttonClose?: React.ReactNode;
  $vacancyEdit?:  IVacanciesResponse | undefined;
};

const initialState = {
  title: "",
  description: "",
  status: "",
  companyId: "",
};

export const FormVacancy = ({ view, onClose, $buttonClose, $vacancyEdit }: FormVacancyProps) => {
  const [formData, setFormData] = useState<IVacancyRequest>(initialState);
  const { companies } = useAllCompanies();
  const vacanciesService = new VacanciesService();
  const router = useRouter();

  useEffect(()=>{
    if ($vacancyEdit) {
      setFormData({
        title: $vacancyEdit.title,
        description: $vacancyEdit.description,
        status: $vacancyEdit.status,
        companyId: $vacancyEdit.company.id || "",
      });
    }
  },[$vacancyEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if ($vacancyEdit){
        await vacanciesService.updateVacancy($vacancyEdit.id, formData );
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const response = await vacanciesService.createVacancy(formData);
      }
      onClose();
      
    } catch (error) {
      console.error("Error creating company: ", error);
    } finally {
      router.refresh();
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
      { $buttonClose }
        <FormTitle $title="Vacancy" />
        <FormGroup>
          <Label $text="Title" $htmlfor="title" />
          <InputText
            $title="Title"
            $name="title"
            $onChange={handleChange}
            $view={view}
            $type="text"
            $value={formData.title}
          />
        </FormGroup>
        <FormGroup>
          <Label $text="Description" $htmlfor="description" />
          <InputText
            $title="Description"
            $name="description"
            $onChange={handleChange}
            $view={view}
            $type="text"
            $value={formData.description}
          />
        </FormGroup>
        <FormGroup>
          <Label $text="Status" $htmlfor="status" />
          <InputSelect
            $title="Status"
            $name="status"
            $onChange={handleChange}
            $view={view}
            $value={formData.status}
            $options={[
              { value: "ACTIVE", label: "Active" },
              { value: "INACTIVE", label: "Inactive" },
            ]}
          />
        </FormGroup>
        <FormGroup>
          <Label $text="Company" $htmlfor="companyId" />
          <InputSelect
            $title="Company"
            $name="companyId"
            $onChange={handleChange}
            $view={view}
            $value={formData.companyId}
            $options={
              companies ? 
              companies.map((company)=>({value: company.id, label: company.name})) :
              []
            }
          />
        </FormGroup>
        <FormGroup>
          <ButtonForm $text="Submit" $view={view} />
        </FormGroup>
      </Form>
    </>
  );
};
