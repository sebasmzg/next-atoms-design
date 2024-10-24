import styled from "styled-components";

const StyledButton = styled.button<{ $view: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 0;
  border: none;
  cursor: pointer;
  padding: 0 20px;
  height: 2rem;
  border-radius: ${(props) => props.theme.borderRadiusButton};
  background: ${(props) =>
    props.$view === "vacantes"
      ? props.theme.colors.accent.vacantes.normal
      : props.theme.colors.accent.companies.normal};
  font-size: ${(props) => props.theme.fontSizes.medium};
  
  &:hover { ${(props) =>
    props.$view === "vacantes"
      ? `background: ${props.theme.colors.accent.vacantes.hover};`
      : `background: ${props.theme.colors.accent.companies.hover};`}}
  }
`;

const StyledIcon = styled.div`
  margin-right: 10px;
  color: ${(props) => props.theme.colors.text.white};
`;
const StyledText = styled.div`
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 500;
  color: ${(props) => props.theme.colors.text.white};
`;

import { ReactNode } from "react";

interface ButtonProps {
  $onClick?: () => void;
  $text: string;
  $view?: string;
  $icon?: ReactNode;
}

export const Button = ({
  $text,
  $onClick,
  $view = "default",
  $icon,
}: ButtonProps) => {
  return (
    <StyledButton onClick={$onClick} $view={$view}>
      <StyledIcon>{$icon}</StyledIcon>
      <StyledText>{$text}</StyledText>
    </StyledButton>
  );
};
