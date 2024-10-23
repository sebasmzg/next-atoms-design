import styled from "styled-components";

const StyledInput = styled.select`
  border: 2px solid ${(props) => props.theme.colors.borders.gray};
  padding: 10px;
  font-family: ${(props) => props.theme.fonts.primary};
  border-radius: ${(props) => props.theme.borderRadius};
  width: 100%;
  box-sizing: border-box;
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.text.mediumGray};
  background-color: ${(props) => props.theme.colors.background.white};
`;

interface SelectProps {
  title: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  options: string[];
}

export const InputSelect = ({ title, name, options }: SelectProps) => {
  return (
    <StyledInput title={title} name={name} >
      {options.map((option, index) => (
        <option key={index} value={index}>
          {option}
        </option>
      ))}
    </StyledInput>
  );
};