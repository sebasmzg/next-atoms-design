import React, { useState } from 'react';
import Label from '../atoms/Label';
import { InputText } from '../atoms/Input-text';

import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    max-width: 400px;
    margin: 0 auto;
    background-color: ${(props) => props.theme.colors.background.white};
`;

const StyledFormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const StyledFormTitle = styled.h2`
    font-size: ${(props) => props.theme.fontSizes.extraLarge};
    color: ${(props) => props.theme.colors.text.darkGray};
    margin: 0.5rem 0 1rem 0;

`;

interface FormProps {
    onSubmit: (formData: { [key: string]: string }) => void;
    view: string;
    title: string;
}

const Form: React.FC<FormProps> = ({ onSubmit, view, title }) => {
    const [formData, setFormData] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledFormTitle>{title}</StyledFormTitle>
            <StyledFormGroup>
                <Label text="Title" htmlfor="title" />
                <InputText title="Title" name="title" onChange={handleChange} view={view} type="text" />
            </StyledFormGroup>
            <StyledFormGroup>
                <Label text="Ubicación" htmlfor="ubicacion" />
                <InputText title="Ubicación" name="ubicacion" onChange={handleChange} view={view} type="" />
            </StyledFormGroup>
            <StyledFormGroup>
                <Label text="Contacto" htmlfor="contacto" />
                <InputText title="Contacto" name="contacto" onChange={handleChange} view={view} type="text" />
            </StyledFormGroup>
            <button type="submit">Submit</button>
        </StyledForm>
    );
};

export default Form;