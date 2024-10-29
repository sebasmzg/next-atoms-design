import React, { ReactNode } from 'react';
import styled from 'styled-components';

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

interface FormProps {
    $buttonClose?: ReactNode;
    children?: ReactNode;
    onSubmit: (e: React.FormEvent) => void;
}

const Form: React.FC<FormProps> = ({ $buttonClose, children, onSubmit }) => {

    return (
        <StyledForm onSubmit={onSubmit}>
            {$buttonClose}
            {children}
        </StyledForm>
    );
};

export default Form;