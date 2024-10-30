"use client";

import {  useState } from "react";
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
import Company from "./Company";
import Vacancy from "./Vacancy";

export const Dashboard = () => {
  const [view, setView] = useState("vacantes");
  const [showModal, setShowModal] = useState(false);


  const handleSwitch = (isLeft: boolean) => {
    setView(isLeft ? "vacantes" : "companies");
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
          {view === "vacantes" ? (
            <Vacancy />
          ):(
            <Company />
          )}
        </div>
      </MainContent>
    </MainLayout>
  );
};
