import styled from "styled-components";

const StyledButton = styled.button<{ $view: string }>`
  display: flex;
  cursor: pointer;
  font-family: ${(props) => props.theme.fonts.primary};
  border-radius: ${(props) => props.theme.borderRadius};
  background: ${(props) =>
    props.$view === "vacantes"
      ? props.theme.colors.accent.vacantes.normal
      : props.theme.colors.accent.companies.normal};
  font-size: ${(props) => props.theme.fontSizes.medium};
  height: 31px;
  padding: 20px;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 200px;
  font-weight: bold;
  border: none;
  color: ${(props) => props.theme.colors.text.white};
  &:hover { ${(props) =>
    props.$view === "vacantes"
      ? `background: ${props.theme.colors.accent.vacantes.hover};`
      : `background: ${props.theme.colors.accent.companies.hover};`}}
  }
`;

interface ButtonFormProps {
  $text: string;
  $onClick?: () => void;
  $view?: string;
}

export const ButtonForm = ({ $text: text, $onClick: onClick, $view: view="default"}: ButtonFormProps) => {
  return <StyledButton onClick={onClick} $view={view} type="submit">{text}</StyledButton>;
};
