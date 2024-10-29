import styled from "styled-components";

const StyledSearchInput = styled.input`
    border: none;
    outline: none;
    width: 100%;
    font-size: ${(props) => props.theme.fontSizes.medium};
    color: ${(props) => props.theme.colors.text.mediumGray};
    background-color: ${(props) => props.theme.colors.background.white};
`;

interface InputSearchProps {
    $placeholder: string;
    $onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputSearch = ({ $placeholder, $onChange }: InputSearchProps) => {
    return <StyledSearchInput placeholder={$placeholder} onChange={$onChange} />;
};