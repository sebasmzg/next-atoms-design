import styled from "styled-components";

const StyledInput = styled.input<{ $view: string }>`
  border: 2px solid ${(props) => props.theme.colors.borders.gray};
  padding: 10px;
  font-family: ${(props) => props.theme.fonts.primary};
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

interface InputProps {
  $title: string;
  $onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  $view?: string;
  $name: string;
  $type: string;
  $placeholder?: string;
}

export const InputText = ({ $title: $title, $view="default",$name, $type  }: InputProps) => {
  return (
    <StyledInput type={$type} title={$title} name={$name} $view={$view} />
  );
};


