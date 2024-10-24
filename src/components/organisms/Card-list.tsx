import styled from "styled-components";
import { Card } from "./Card";
import { ICompany, IVacancies } from "@/utils/models/model";
import { Pagination } from "../atoms/Pagination";

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
  $data: Array<ICompany | IVacancies>;
}

export const CardList = ({ $data }: CardListProps) => {
  return (
    <>
      <StyledCardList>
        {$data.map((item) => (
          <Card $data={item} key={item.id} />
        ))}
        <div></div>
      </StyledCardList>
      <PaginatioWrapper>
        <Pagination $currentPage={1} $totalPages={10} />
      </PaginatioWrapper>
    </>
  );
};
