import styled from "styled-components";

const StyledMainLayout = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 3rem auto;
  height: 80%;
  width: calc(100% - 10rem);
  background: ${({ theme }) => theme.colors.background.white};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return <StyledMainLayout>{children}</StyledMainLayout>;
};
