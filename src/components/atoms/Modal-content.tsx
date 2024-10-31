import styled from "styled-components";

const Content = styled.div`
  padding: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  position: relative;
`;

interface ModalProps {
  children: React.ReactNode;
  $onClick: (e: React.MouseEvent) => void;
}

export const ModalContent = ({ children, $onClick }: ModalProps) => {
  return (
    <Content onClick={$onClick}>
      {children}
    </Content>
  );
};
