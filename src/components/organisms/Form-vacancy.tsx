"use client";

import { useState } from "react";
import { FormGroup } from "../atoms/Form-group";
import { FormTitle } from "../atoms/Form-title";
import { InputText } from "../atoms/Input-text";
import Label from "../atoms/Label";
import { InputSelect } from "../atoms/InputSelect";
import { CompaniesService } from "@/services/companies.service";
import { ButtonForm } from "../atoms/Button-form";
import Form from "../molecules/Form";

type FormCompanyProps = {
  view: string;
  onClose: () => void;
};

export const FormVacancy = ({ view, onClose }: FormCompanyProps) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const companiesService = new CompaniesService();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await companiesService.createCompany(formData);
      onClose();
    } catch (error) {
      console.error("Error creating company: ", error);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
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
          <Label $text="Company" $htmlfor="company" />
          <InputSelect
            $title="Company"
            $name="company"
            $onChange={handleChange}
            $view={view}
            $options={[
              { value: "1", label: "Company 1" },
              { value: "2", label: "Company 2" },
              { value: "3", label: "Company 3" },
            ]}
          />
        </FormGroup>
        <FormGroup>
          <ButtonForm $text="Submit" $view={view} />
        </FormGroup>
      </Form>
    </>
  );
};
