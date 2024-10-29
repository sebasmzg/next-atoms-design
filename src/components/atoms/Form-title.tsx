import styled from "styled-components";

const StyledFormTitle = styled.h2`
    font-size: ${(props) => props.theme.fontSizes.large};
    color: ${(props) => props.theme.colors.text.darkGray};
    margin: 0.5rem 0 0.5rem 0;
`;

interface FormTitleProps {
    $title: string;
}

export const FormTitle = ({ $title: title }: FormTitleProps) => {
    return <StyledFormTitle><h2>{title}</h2></StyledFormTitle>;
};