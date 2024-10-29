import styled from "styled-components";

const StyledModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
  border-radius: ${({ theme }) => theme.borderRadius};
`;

interface ModalProps {
  children: React.ReactNode;
  $onClick: (e: React.MouseEvent) => void;
}

export const Modal = ({ children, $onClick }: ModalProps) => {
    return <StyledModal onClick={$onClick}>{children}</StyledModal>;
};
