import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.background.white};
  margin-bottom: 1rem;
`;

interface PageHeaderProps {
  children: React.ReactNode;
}

export const PageHeader = ({ children }: PageHeaderProps) => {
  return <StyledHeader>{children}</StyledHeader>;
};