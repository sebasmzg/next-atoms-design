"use client";

import { useState } from "react";
import { FormGroup } from "../atoms/Form-group";
import { FormTitle } from "../atoms/Form-title";
import { InputText } from "../atoms/Input-text";
import Label from "../atoms/Label";
import { InputSelect } from "../atoms/InputSelect";
import { ButtonForm } from "../atoms/Button-form";
import Form from "../molecules/Form";
import { VacanciesService } from "@/services/vacancies.service";
import { useAllCompanies } from "@/hooks/useAllCompanies";
import { IVacancyRequest } from "@/utils/models/models";

type FormCompanyProps = {
  view: string;
  onClose: () => void;
  $buttonClose?: React.ReactNode;
};

const initialState = {
  title: "",
  description: "",
  status: "",
  companyId: "",
};

export const FormVacancy = ({ view, onClose, $buttonClose }: FormCompanyProps) => {
  const [formData, setFormData] = useState<IVacancyRequest>(initialState);
  const { companies } = useAllCompanies();
  const vacanciesService = new VacanciesService();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log("Form Data change:", { ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("data", formData);
    try {
      console.log("Form Data before form:", formData);
      await vacanciesService.createVacancy(formData);
      console.log("Form Data after form:", formData);
      onClose();
    } catch (error) {
      console.error("Error creating company: ", error);
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
          />
        </FormGroup>
        <FormGroup>
          <Label $text="Status" $htmlfor="status" />
          <InputSelect
            $title="Status"
            $name="status"
            $onChange={handleChange}
            $view={view}
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
