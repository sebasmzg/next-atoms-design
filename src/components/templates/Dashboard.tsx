"use client";

import {  ReactNode, useState } from "react";
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
import { useModalContext } from "@/context/modalContext";
import { FormCompany } from "../organisms/Form-company";
import { FormVacancy } from "../organisms/Form-vacancy";
import { ButtonClose } from "../atoms/Button-close";
import { useRouter } from "next/navigation";

export const Dashboard = ({children}: {children:ReactNode}) => {
  const { openModal, setModalContent, closeModal } = useModalContext();
  const [view, setView] = useState("vacantes");
  const router = useRouter();

  const handleSwitch = (isLeft: boolean) => {
    setView(isLeft ? "vacantes" : "companies");
    router.push(isLeft ? "/vacancies" : "/companies");
  };

  const handleModal = () => {
    setModalContent(
      view === "companies" ? (
        <FormCompany
          view={view}
          onClose={closeModal}
          $buttonClose={<ButtonClose $onClick={closeModal} />}
        />
      ) : (
        <FormVacancy
          view={view}
          onClose={closeModal}
          $buttonClose={<ButtonClose $onClick={closeModal} />}
        />
      )
    )
    openModal();
  }

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
              $onClick={handleModal}
            />
          </div>
        </PageHeader>
        <div>
          {children}
        </div>
      </MainContent>
    </MainLayout>
  );
};
