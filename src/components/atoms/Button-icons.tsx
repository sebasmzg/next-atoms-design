import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 0;
  border: 1px solid ${(props) => props.theme.colors.borders.gray};
  cursor: pointer;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: ${(props) => props.theme.borderRadius};
  background: ${(props) => props.theme.colors.background.white};
  font-size: ${(props) => props.theme.fontSizes.medium};
  &:hover {
    background: ${(props) => props.theme.colors.background.lightGrayTabs};
  }
`;

interface ButtonIconProps {
  $icon: React.ReactNode;
}

export const ButtonIcon = ({ $icon }: ButtonIconProps) => {
  return <StyledButton>{$icon}</StyledButton>;
};
