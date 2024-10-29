import { CiSearch } from "react-icons/ci";
import styled from "styled-components";

const StyledSearchIcon = styled(CiSearch)`
    margin-right: 10px;
    color: ${(props) => props.theme.colors.text.mediumGray};
    cursor: pointer;
`;

interface IconSearchProps {
    $onClick?: () => void;
}

export const IconSearch = ({$onClick}: IconSearchProps) => {
    return <StyledSearchIcon onClick={$onClick} />;
};