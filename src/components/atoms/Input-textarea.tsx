import styled from "styled-components";

const StyledTextArea = styled.textarea`
  border: 2px solid ${(props) => props.theme.colors.borders.gray};
  padding: 10px;
  border-radius: ${(props) => props.theme.borderRadius};
  width: 100%;
  box-sizing: border-box;
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.text.mediumGray};
  background-color: ${(props) => props.theme.colors.background.white};
`;

interface TextAreaProps {
  title: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder?: string;
}

export const InputTextArea = ({ title, name }: TextAreaProps) => {
  return (
    <StyledTextArea title={title} name={name}/>
  );
};