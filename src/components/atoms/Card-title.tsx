import styled from "styled-components";

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  h2 {
    margin: 0;
    color: ${(props) => props.theme.colors.text.darkGray};  
  }
`;

interface TitleCardProps {
  $text: string | undefined;
}

export const StyledTitleCard = ({$text}: TitleCardProps) => {
    return (
        <StyledTitle>
            <h2>{$text}</h2>
        </StyledTitle>
    )
}