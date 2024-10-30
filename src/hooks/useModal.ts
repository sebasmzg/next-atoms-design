"use client";

import { useState } from "react";

export const useModal = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleMouseCloseModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  return { showModal, handleCloseModal, handleOpenModal, setShowModal, handleMouseCloseModal };
};
