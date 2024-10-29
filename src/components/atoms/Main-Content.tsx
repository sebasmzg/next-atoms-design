import styled from "styled-components";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background.white};
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

interface MainContentProps {
  children: React.ReactNode;
}

export const MainContent = ({ children }: MainContentProps) => {
  return <ContentWrapper>{children}</ContentWrapper>;
};