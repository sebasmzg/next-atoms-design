import { ReactNode } from "react";
import styled from "styled-components";
import { Card } from "../atoms/Card";
import { ICompany, IVacancies } from "@/utils/models/model";

const StyledCardList = styled.div`
    background: ${(props) => props.theme.colors.background.white};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    grid-template-rows: repeat(3, 1fr);
`;

interface CardListProps {
    $data: Array<ICompany | IVacancies>;
}

export const CardList = ({ $data }: CardListProps) => {
    return (
        <StyledCardList>
            {$data.map((item)=>(
                <Card $data={item} />
            ))}
        </StyledCardList>
    );
}

