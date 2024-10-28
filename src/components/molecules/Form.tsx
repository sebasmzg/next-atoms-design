import React, { ReactNode, useState } from 'react';
import Label from '../atoms/Label';
import { InputText } from '../atoms/Input-text';
import styled from 'styled-components';
import { InputTextArea } from '../atoms/Input-textarea';
import { InputSelect } from '../atoms/InputSelect';
import { ButtonForm } from '../atoms/Button-form';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 30rem;
    margin: 0 auto;
    background-color: ${(props) => props.theme.colors.background.white};
    text-align: left;
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
    $onSubmit: (formData: { [key: string]: string }) => void;
    $view: string;
    $title: string;
    $buttonClose: ReactNode;
}

const Form: React.FC<FormProps> = ({ $onSubmit: onSubmit, $view: view, $title: title, $buttonClose }) => {
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
            {$buttonClose}
            <StyledFormTitle>{title}</StyledFormTitle>
            <StyledFormGroup>
                <Label $text="Title" $htmlfor="title" />
                <InputText $title="Title" $name="title" $onChange={handleChange} $view={view} $type="text" />
            </StyledFormGroup>
            <StyledFormGroup>
                <Label $text="Descripción" $htmlfor="descripcion" />
                <InputTextArea $title="Descripcion" $name="descripcion" $view={view} $onChange={handleChange} />
            </StyledFormGroup>
            <StyledFormGroup>
                <Label $text="Estado" $htmlfor="estado" />
                <InputSelect title="Estado" $name="estado" $view={view} $onChange={handleChange} $options={['OPEN', 'CLOSE']}/>
            </StyledFormGroup>
            <StyledFormGroup>
                <Label $text="Compañía" $htmlfor="companie" />
                <InputSelect title="Compañía" $name="companie" $view={view} $onChange={handleChange} $options={['Selecciona una compañía', 'Compañía 1','Compañia 2', 'Compañia 3']}/>
            </StyledFormGroup>
            <StyledFormGroup>
                <ButtonForm $text="Submit" $view={view}/>
            </StyledFormGroup>
            
        </StyledForm>
    );
};

export default Form;