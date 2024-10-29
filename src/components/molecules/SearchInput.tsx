import styled from "styled-components";
import { InputSearch } from "../atoms/Input-search";
import { IconSearch } from "../atoms/Icon-search";

const StyledSearchInputWrapper = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid ${(props) => props.theme.colors.borders.gray};
    padding: 10px;
    border-radius: ${(props) => props.theme.borderRadiusButton};
    width: 250px;
    height: 2rem;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.colors.background.white};
`;

interface SearchInputProps {
    $placeholder: string;
    $onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    $onClick?: () => void;
}

export const SearchInput = ({ $placeholder, $onChange, $onClick }: SearchInputProps) => {
    return (
        <StyledSearchInputWrapper>
            <IconSearch $onClick={$onClick}/>
            <InputSearch $placeholder={$placeholder} $onChange={$onChange}/>
        </StyledSearchInputWrapper>
    );
};