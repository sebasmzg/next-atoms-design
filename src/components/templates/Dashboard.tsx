"use client";

import styled from "styled-components";
import { CardList } from "../organisms/Card-list";
import { useEffect, useState } from "react";
import { ICompany, IVacancies } from "@/utils/models/model";
import ButtonSwitch from "../atoms/Button-switch";
import { MdWorkOutline } from "react-icons/md";
import { PiBuildingApartment } from "react-icons/pi";
import { SearchInput } from "../atoms/SearchInput";
import { Button } from "../atoms/Button";
import { IoIosAddCircleOutline } from "react-icons/io";
import Form from "../molecules/Form";
import { ButtonClose } from "../atoms/Button-close";

const MainLayout = styled.div`
  display: flex;
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

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 80%;
  width: 90%;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background.white};
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.background.white};
  margin-bottom: 1rem;
`;

const PageTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.background.white};
  margin-bottom: 1rem;
`;

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const Dashboard = () => {
  const [view, setView] = useState("vacantes");
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [cardData, setCardData] = useState<Array<ICompany | IVacancies>>([]);
  const fetchCardData = async () => {
    try {
      const response = await fetch(
        view === "vacantes"
          ? "https://671638f633bc2bfe40bcf693.mockapi.io/api/v1/vacancies"
          : "https://671638f633bc2bfe40bcf693.mockapi.io/api/v1/companies"
      );
      const data = await response.json();
      setCardData(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCardData();
  }, [view]);
  const handleSwitch = (isLeft: boolean) => {
    setView(isLeft ? "vacantes" : "companies");
    fetchCardData();
  };
  const handleSubmit = () => {
    console.log("submit");
  };
  const handleCloseModal = () => {
    console.log("close");
    setShowModal(false);
  };
  return (
    <MainLayout>
      <Title>
        <h1>Admin Panel</h1>
      </Title>
      <ContentWrapper>
        <NavBar>
          <div>
            <ButtonSwitch
              $onSwitch={handleSwitch}
              $leftIcon={<MdWorkOutline />}
              $leftLabel="Vacantes"
              $rightIcon={<PiBuildingApartment />}
              $rightLabel="Compañías"
              $view={view}
            />
          </div>
          <div>
            <SearchInput $placeholder="Search..." />
          </div>
        </NavBar>
        <PageTitle>
          <div>
            {view === "vacantes" ? <h1>Vacantes</h1> : <h1>Compañías</h1>}
          </div>
          <div>
            <Button
              $view={view}
              $text="Agregar nuevo"
              $icon={<IoIosAddCircleOutline />}
              $onClick={() => setShowModal(true)}
            />
          </div>
          {showModal && (
            <Modal>
              <Form
                $onSubmit={() => handleSubmit}
                $view={view}
                $title={view}
                $buttonClose={<ButtonClose $onClick={() => handleCloseModal} />}
              />
            </Modal>
          )}
        </PageTitle>

        <div>{loading ? <p>Loading...</p> : <CardList $data={cardData} />}</div>
      </ContentWrapper>
    </MainLayout>
  );
};
