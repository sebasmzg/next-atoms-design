import styled from "styled-components";

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
`;

interface TitleProps {
  $title: string;
}

export const Title = ({ $title: title }: TitleProps) => {
  return <StyledTitle><h1>{title}</h1></StyledTitle>;
};