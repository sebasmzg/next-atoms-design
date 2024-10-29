import styled from "styled-components";

const StyledInput = styled.select<{ $view: string }>`
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

interface SelectProps {
  $title: string;
  $onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  $name: string;
  $options: { value: string; label: string }[];
  $view?: string;
}

export const InputSelect = ({ $title: title, $name: name, $options: options, $view="default" }: SelectProps) => {
  return (
    <StyledInput title={title} name={name} $view={$view} >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledInput>
  );
};