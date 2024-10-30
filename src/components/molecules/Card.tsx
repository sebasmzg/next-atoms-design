import { ICompanyResponse,IVacanciesResponse } from "@/utils/models/models";
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
  position: relative;
  text-align: left;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.background.white};
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transform: scale(1.01);
    cursor: pointer;
  }
`;


interface CardProps {
  $data?: IVacanciesResponse | ICompanyResponse;
  $view?: string;
}

export const Card = ({ $data, $view="default" }: CardProps) => {
  const isVacancy = ($data: IVacanciesResponse | ICompanyResponse): $data is IVacanciesResponse => {
    return ($data as IVacanciesResponse).company !== undefined;
  };
  return (
    <StyledCard>
      {$data && (
        isVacancy($data) ? (
          <div>
            <StyledTitleCard $text={$data.title} />
            <StyledCardContent
              $text={[
                `Description: ${$data.description}`,
                `State: ${$data.status}`,
                `Company: ${$data.company.name}`,
              ]}
            />
            <IconButtons view={$view}/>
          </div>
        ) : (
          <div>
            <StyledTitleCard $text={$data.name} />
            <StyledCardContent
              $text={[`Location: ${$data.location}`, `Contact: ${$data.contact}`]}
            />
            <IconButtons view={$view}/>
          </div>
        )
      )}
    </StyledCard>
  );
};
