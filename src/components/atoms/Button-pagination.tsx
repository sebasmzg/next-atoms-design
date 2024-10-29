import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 0;
  border: 1px solid ${(props) => props.theme.colors.borders.gray};
  cursor: pointer;
  height: 2.5rem;
  width: 2rem;
  border-radius: ${(props) => props.theme.borderRadiusButton};
  background: ${(props) => props.theme.colors.background.lightGrayPagination};
  font-size: ${(props) => props.theme.fontSizes.medium};
  &:hover {
    background: ${(props) => props.theme.colors.background.lightGrayTabs};
  }
`;

interface PaginationButtonProps {
    $disabled: boolean;
    $onClick: () => void;
    children: React.ReactNode;
}

export const PaginationButton = ({ $disabled, $onClick, children }: PaginationButtonProps) => {
    return (
        <StyledButton onClick={$onClick} disabled={$disabled}>
            {children}
        </StyledButton>
    );
};