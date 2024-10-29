import styled from "styled-components";

const StyledText = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.text.darkGray};
`;

interface PaginationTextProps {
  currentPage: number;
  totalPages: number;
}

export const PaginationText = ({ currentPage, totalPages }: PaginationTextProps) => {
  return <StyledText>Page {currentPage} of {totalPages}</StyledText>;
};