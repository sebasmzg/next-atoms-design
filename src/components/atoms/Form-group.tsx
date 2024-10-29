import styled from "styled-components";

const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

interface FormGroupProps {
  children: React.ReactNode;
}

export const FormGroup = ({ children }: FormGroupProps) => {
  return <StyledFormGroup>{children}</StyledFormGroup>;
};