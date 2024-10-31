import styled from "styled-components";
import { ICompanyPageable, IVacanciesPageable } from "@/utils/models/models";
import { Pagination } from "../molecules/Pagination";
import { Card } from "../molecules/Card";
import { PaginationWrapper } from "../molecules/Pagination-wrapper";

const StyledCardList = styled.div`
  background: ${(props) => props.theme.colors.background.white};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

interface CardListProps {
  $data: ICompanyPageable | IVacanciesPageable | null;
  $currentPage: number;
  $totalPages: number;
  onPageChange: (page: number) => void;
}

export const CardList = ({ $data, $currentPage, $totalPages, onPageChange}: CardListProps) => {
  return (
    <>
      <StyledCardList>       
        {$data && $data.content && $data.content.length > 0 ?(
          $data.content.map((item) => (
            <Card $data={item} key={item.id}/>
          ))
        ):(
          <div>Fetching data...</div>
        )}
      </StyledCardList>
      <PaginationWrapper>
        <Pagination $currentPage={$currentPage} $totalPages={$totalPages} $onPageChange={onPageChange}/>
      </PaginationWrapper>
    </>
  );
};
