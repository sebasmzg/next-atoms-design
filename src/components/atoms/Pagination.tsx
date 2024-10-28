import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const StyledPagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border-radius: 5px;
  width: 250px;
`;

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

const StyledText = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.text.darkGray};
`;

interface PaginationProps {
  $currentPage: number;
  $totalPages: number;
  $onPageChange: (page: number) => void;
}

export const Pagination = ({
  $currentPage,
  $totalPages,
  $onPageChange
}: PaginationProps) => {

  const handleLeftClick = () => {
    if($currentPage > 1) {
      $onPageChange($currentPage - 1);
    }
  }

  const handleRightClick = () => {
    if($currentPage < $totalPages) {
      $onPageChange($currentPage + 1);
    }
  }

  return (
    <StyledPagination>
      <StyledButton onClick={handleLeftClick} disabled={$currentPage === 1}>
        <FaChevronLeft />
      </StyledButton>
      <StyledText>
        Page {$currentPage} of {$totalPages}
      </StyledText>
      <StyledButton onClick={handleRightClick} disabled={$currentPage === $totalPages}>
        <FaChevronRight />
      </StyledButton>
    </StyledPagination>
  );
};
