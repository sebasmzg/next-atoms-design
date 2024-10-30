'use client'
import styled from "styled-components";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { ButtonIcon } from "../atoms/Button-icons";
import { useModal } from "@/hooks/useModal";

const StyledIcons = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 1rem;
  gap: 0.5rem;
`;

const IconButtons = ({view}: {view:string}) => {
  const {showModal,handleCloseModal, setShowModal } = useModal()


  const handleEdit = () => {
    setShowModal(true)
    {view === "vacantes" ? console.log("vacantes") : console.log("Edit button clicked")}
  }
  const handleDelete = () => {
    console.log("Delete button clicked");
  }
  return (
    <StyledIcons>
      <ButtonIcon $onClick={handleEdit} $icon={<MdOutlineModeEdit color="blue" />} />
      <ButtonIcon $onClick={handleDelete} $icon={<FaRegTrashAlt color="red" />} />
    </StyledIcons>
  );
};

export default IconButtons;