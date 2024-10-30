import styled from "styled-components";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { ButtonIcon } from "../atoms/Button-icons";
import { useModal } from "@/hooks/useModal";
import { Modal } from "../atoms/Modal";
import { FormCompany } from "../organisms/Form-company";
import { ButtonClose } from "../atoms/Button-close";
import { FormVacancy } from "../organisms/Form-vacancy";

const StyledIcons = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 1rem;
  gap: 0.5rem;
`;

const IconButtons = ({view}:{view: string}) => {
  const { showModal, handleCloseModal, setShowModal, handleMouseCloseModal, } = useModal();

  const handleEdit = () => {
    console.log("Edit");
    setShowModal(true);
  };

  const handleDelete = () => {
    console.log("Delete");
  };

  return (
    <>
      <StyledIcons>
        <ButtonIcon
          $onClick={handleEdit}
          $icon={<MdOutlineModeEdit color="blue" />}
        />
        <ButtonIcon
          $onClick={handleDelete}
          $icon={<FaRegTrashAlt color="red" />}
        />
      </StyledIcons>
      {showModal && (
        <Modal $onClick={handleMouseCloseModal}>
          {view === "companies" ? (
            <>
              <FormCompany
                view={view}
                onClose={handleCloseModal}
                $buttonClose={<ButtonClose $onClick={handleCloseModal} />}
              />
            </>
          ) : (
            <>
              <FormVacancy
                view={view}
                onClose={handleCloseModal}
                $buttonClose={<ButtonClose $onClick={handleCloseModal} />}
              />
            </>
          )}
        </Modal>
      )}
    </>
  );
};

export default IconButtons;
