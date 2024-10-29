import styled from "styled-components";

const StyledCloseButton = styled.button`
    align-self: flex-end;
    background-color: transparent;
    border: none;
    position: absolute;
    color: ${(props) => props.theme.colors.text.lightGray};
    cursor: pointer;
    font-size: ${(props) => props.theme.fontSizes.medium};
    padding: 0.5rem;
    &:hover {
        color: ${(props) => props.theme.colors.text.darkGray};
    }
`;

interface CloseButtonProps {
    $onClick?: () => void;
}

export const ButtonClose = ({ $onClick }: CloseButtonProps) => {
    return <StyledCloseButton onClick={$onClick}>x</StyledCloseButton>;
};