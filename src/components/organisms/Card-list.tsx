import styled from "styled-components";
import { ICompanyPageable, IVacanciesPageable } from "@/utils/models/models";
import { Pagination } from "../atoms/Pagination";
import { Card } from "../molecules/Card";

const StyledCardList = styled.div`
  background: ${(props) => props.theme.colors.background.white};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const PaginatioWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`;

interface CardListProps {
  $data: ICompanyPageable | IVacanciesPageable;
  $currentPage: number;
  $totalPages: number;
  onPageChange: (page: number) => void;
}

export const CardList = ({ $data, $currentPage, $totalPages, onPageChange }: CardListProps) => {
  return (
    <>
      <StyledCardList>       
        {$data.content.map((item) => (
          <Card $data={item} key={item.id} />
        ))}
        <div></div>
      </StyledCardList>
      <PaginatioWrapper>
        <Pagination $currentPage={$currentPage} $totalPages={$totalPages} $onPageChange={onPageChange}/>
      </PaginatioWrapper>
    </>
  );
};
