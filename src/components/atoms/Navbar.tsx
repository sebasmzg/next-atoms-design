import styled from "styled-components";

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.background.white};
  margin-bottom: 1rem;
`;

interface NavbarProps {
  children: React.ReactNode;
}

export const Navbar = ({ children }: NavbarProps) => {
  return <NavBar>{children}</NavBar>;
};