"use client";

import styled from "styled-components";
import { ModalContent } from "../atoms/Modal-content";
import { useModalContext } from "@/context/modalContext";

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
`;

export const Modal = () => {
  const { showModal, closeModal, modalContent } = useModalContext();

  if (!showModal) return null;

  return (
    <StyledModal onClick={closeModal}>
      <ModalContent $onClick={(e) => e.stopPropagation()}>
        {modalContent}
      </ModalContent>
    </StyledModal>
  );
};
