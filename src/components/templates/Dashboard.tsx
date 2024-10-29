"use client";

import { CardList } from "../organisms/Card-list";
import { useEffect, useState } from "react";
import { ICompanyPageable, IVacanciesPageable } from "@/utils/models/models";
import ButtonSwitch from "../atoms/Button-switch";
import { MdWorkOutline } from "react-icons/md";
import { PiBuildingApartment } from "react-icons/pi";
import { SearchInput } from "../molecules/SearchInput";
import { Button } from "../atoms/Button";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MainLayout } from "../atoms/Main-layout";
import { Title } from "../atoms/Title";
import { MainContent } from "../atoms/Main-Content";
import { PageHeader } from "../atoms/Main-header";
import { Navbar } from "../atoms/Navbar";
import { Modal } from "../atoms/Modal";
import { FormCompany } from "../organisms/Form-company";
import { FormVacancy } from "../organisms/Form-vacancy";

export const Dashboard = () => {
  const [view, setView] = useState("vacantes");
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [cardData, setCardData] = useState<
    Array<ICompanyPageable | IVacanciesPageable>
  >([]);

  const fetchCardData = async (page: number = 1) => {
    try {
      const response = await fetch(
        view === "vacantes"
          ? `https://vacantsbackendgates-production.up.railway.app/api/v1/vacants?page=${page}&size=6`
          : `https://vacantsbackendgates-production.up.railway.app/api/v1/company?page=${page}&size=9`
      );
      const data = await response.json();
      setCardData(data);
      setCurrentPage(data.number + 1);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCardData(currentPage);
  }, [view, currentPage]);

  const handleSwitch = (isLeft: boolean) => {
    setView(isLeft ? "vacantes" : "companies");
    setCurrentPage(1);
  };


  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleMouseCloseModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  return (
    <MainLayout>
      <Title $title="Admin Panel" />
      <MainContent>
        <Navbar>
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
        </Navbar>
        <PageHeader>
          <div>
            <h2>{view === "vacantes" ? "Vacantes" : "Compañías"}</h2>
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
            <Modal $onClick={handleMouseCloseModal}>
              {view === "companies" ? (
                <>
                  <FormCompany view={view} onClose={handleCloseModal} />
                </>
              ) : (
                <>
                  <FormVacancy view={view} onClose={handleCloseModal} />
                </>
              )}
            </Modal>
          )}
        </PageHeader>

        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <CardList
              $data={cardData}
              $currentPage={currentPage}
              $totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </MainContent>
    </MainLayout>
  );
};
