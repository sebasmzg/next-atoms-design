import { CiSearch } from "react-icons/ci";
import styled from "styled-components";

const StyledSearchInputWrapper = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid ${(props) => props.theme.colors.borders.gray};
    padding: 10px;
    border-radius: ${(props) => props.theme.borderRadiusButton};
    width: 100%;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.colors.background.white};
`;

const StyledSearchIcon = styled(CiSearch)`
    margin-right: 10px;
    color: ${(props) => props.theme.colors.text.mediumGray};
`;

const StyledSearchInput = styled.input`
    border: none;
    outline: none;
    width: 100%;
    font-size: ${(props) => props.theme.fontSizes.medium};
    color: ${(props) => props.theme.colors.text.mediumGray};
    background-color: ${(props) => props.theme.colors.background.white};
`;

interface SearchInputProps {
    $placeholder: string;
    $onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({ $placeholder, $onChange }: SearchInputProps) => {
    return (
        <StyledSearchInputWrapper>
            <StyledSearchIcon />
            <StyledSearchInput placeholder={$placeholder} onChange={$onChange}/>
        </StyledSearchInputWrapper>
    );
};