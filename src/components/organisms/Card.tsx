import { ICompany, IVacancy } from "@/utils/models/model";
import styled from "styled-components";
import { StyledTitleCard } from "../atoms/Card-title";
import { StyledCardContent } from "../atoms/Card-content";
import IconButtons from "../molecules/Icon-buttons";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.colors.borders.gray};
  border-radius: ${(props) => props.theme.borderRadius};
  width: 90%;
  height: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.background.white};
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`;


interface CardProps {
  $data?: IVacancy | ICompany;
}

export const Card = ({ $data }: CardProps) => {
  const isVacancy = ($data: IVacancy | ICompany): $data is IVacancy => {
    return ($data as IVacancy).companyId !== undefined;
  };
  return (
    <StyledCard>
      {$data && isVacancy($data) ? (
        <>
          <div>
            <StyledTitleCard $text={$data.title} />
            <StyledCardContent
              $text={[
                `Description: ${$data.description}`,
                `State: ${$data.state}`,
                `Company: ${$data.companyId}`,
              ]}
            />
          </div>
          <IconButtons />
        </>
      ) : (
        <div>
          <div>
            <StyledTitleCard $text={$data?.name} />
            <StyledCardContent
              $text={[`City: ${$data?.city}`, `Contact: ${$data?.contact}`]}
            />
          </div>
          <IconButtons />
        </div>
      )}
    </StyledCard>
  );
};
