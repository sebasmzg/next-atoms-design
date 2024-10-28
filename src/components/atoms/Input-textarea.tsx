import styled from "styled-components";

const StyledTextArea = styled.textarea<{ $view: string }>`
  border: 2px solid ${(props) => props.theme.colors.borders.gray};
  padding: 10px;
  border-radius: ${(props) => props.theme.borderRadius};
  width: 100%;
  box-sizing: border-box;
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.text.mediumGray};
  background-color: ${(props) => props.theme.colors.background.white};
  &:focus {
    border-color: ${(props) => 
      props.$view === "vacantes"
        ? props.theme.colors.focus.purple
        : props.theme.colors.focus.pink};
        outline: 2px solid ${(props) => props.theme.colors.borders.gray};
        outline-offset: 2px;
  }
`;

interface TextAreaProps {
  $title: string;
  $onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  $name: string;
  $view?: string
  $placeholder?: string;
}

export const InputTextArea = ({ $title: title, $name: name, $view="deafult" }: TextAreaProps) => {
  return (
    <StyledTextArea title={title} name={name} $view={$view} />
  );
};