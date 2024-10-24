import { ICompany, IVacancies } from "@/utils/models/model";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid ${(props) => props.theme.colors.borders.gray};
  border-radius: 8px;
  max-width: 400px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.background.white};
`;

interface CardProps {
  $data?: IVacancies | ICompany
}

export const Card = ({ $data }: CardProps) => {
    const isVacancy = ($data: IVacancies | ICompany): $data is IVacancies => {
        return ($data as IVacancies).companyId !== undefined;
    }
  return (
    <StyledCard>
      {$data && isVacancy($data) ? (
        <>
            <h2>{$data.title}</h2>
            <p>{$data.description}</p>
            <p>{$data.state}</p>
        </>
      ):(
        <>
            <h2>{$data?.name}</h2>
            <p>{$data?.city}</p>
            <p>{$data?.contact}</p>
        </>
      )}
    </StyledCard>
  );
};
