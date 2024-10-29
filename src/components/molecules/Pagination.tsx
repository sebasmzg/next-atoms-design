import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { PaginationButton } from "../atoms/Button-pagination";
import { PaginationText } from "../atoms/Pagination-text";

const StyledPagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border-radius: 5px;
  width: 250px;
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
      <PaginationButton $onClick={handleLeftClick} $disabled={$currentPage === 1}>
        <FaChevronLeft />
      </PaginationButton>
      <PaginationText currentPage={$currentPage} totalPages={$totalPages}  />
      <PaginationButton $onClick={handleRightClick} $disabled={$currentPage === $totalPages}>
        <FaChevronRight />
      </PaginationButton>
    </StyledPagination>
  );
};
