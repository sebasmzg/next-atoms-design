import styled from "styled-components";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.background.white};
  p {
    margin: 0;
    color: ${(props) => props.theme.colors.text.mediumGray};
  }
`;

interface ContentCardProps {
    $text: string[] | undefined;
}


export const StyledCardContent = ({ $text }: ContentCardProps ) => {
  return (
    <StyledContent>
      {$text?.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </StyledContent>
  );
};