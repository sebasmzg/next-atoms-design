import styled from "styled-components";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { ButtonIcon } from "../atoms/Button-icons";
import { ICompanyResponse, IVacanciesResponse } from "@/utils/models/models";
import { useModal } from "@/hooks/useModal";
import { Modal } from "./Modal";
import { FormCompany } from "../organisms/Form-company";
import { ButtonClose } from "../atoms/Button-close";
import { FormVacancy } from "../organisms/Form-vacancy";
import { CompaniesService } from "@/services/companies.service";
import { VacanciesService } from "@/services/vacancies.service";

const StyledIcons = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 1rem;
  gap: 0.5rem;
`;

interface IconButtonsProps {
  view: string;
  itemData?: ICompanyResponse | IVacanciesResponse | undefined;
}

const companiesService = new CompaniesService();
const vacanciesService = new VacanciesService();

const IconButtons = ({ view, itemData }: IconButtonsProps) => {
  const { showModal, handleOpenModal, handleCloseModal, handleMouseCloseModal} = useModal();

  const handleEdit = () => {
    handleOpenModal();
  };

  const handleDelete = async () => {
    if (itemData) {
      try {
        if (view === "companies"){
          window.confirm("Are you sure you want to delete this item?");
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const response = await companiesService.deleteCompany(itemData.id);
        } else {
          window.confirm("Are you sure you want to delete this item?");
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const response = await vacanciesService.deleteVacancy(itemData.id);
        }
        } catch (error) {
          console.error("Error deleting item: ", error);
        }
      }
    }

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
            <FormCompany
              view={view}
              onClose={handleCloseModal}
              $buttonClose={<ButtonClose $onClick={handleCloseModal} />}
              $companyEdit={itemData as ICompanyResponse} // Pass the item data to the form
            />
          ) : (
            <FormVacancy
              view={view}
              onClose={handleCloseModal}
              $buttonClose={<ButtonClose $onClick={handleCloseModal} />}
              $vacancyEdit={itemData as IVacanciesResponse} // Pass the item data to the form
            />
          )}
        </Modal>
      )}
    </>
  );
};

export default IconButtons;