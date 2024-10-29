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
import Form from "../molecules/Form";
import { ButtonClose } from "../atoms/Button-close";
import { ButtonForm } from "../atoms/Button-form";
import Label from "../atoms/Label";
import { InputText } from "../atoms/Input-text";
import { MainLayout } from "../atoms/Main-layout";
import { Title } from "../atoms/Title";
import { MainContent } from "../atoms/Main-Content";
import { FormTitle } from "../atoms/Form-title";
import { PageHeader } from "../atoms/Main-header";
import { Navbar } from "../atoms/Navbar";
import { Modal } from "../atoms/Modal";
import { FormGroup } from "../atoms/Form-group";
import { InputSelect } from "../atoms/InputSelect";

export const Dashboard = () => {
  const [view, setView] = useState("vacantes");
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [cardData, setCardData] = useState<
    Array<ICompanyPageable | IVacanciesPageable>
  >([]);
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const fetchCardData = async (page: number = 1) => {
    try {
      const response = await fetch(
        view === "vacantes"
          ? `https://vacantsbackendgates-production.up.railway.app/api/v1/vacants?page=${page}&size=9`
          : `https://vacantsbackendgates-production.up.railway.app/api/v1/company?page=${page}&size=9`
      );
      const data = await response.json();
      console.log("data", data);
      setCardData(data);
      setCurrentPage(data.number + 1);
      console.log("currentPage", currentPage);

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

  const handleSubmit = (e: React.FormEvent) => {
    console.log("submit");
    e.preventDefault();
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleMouseCloseModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
              <Form
                $buttonClose={<ButtonClose $onClick={handleCloseModal} />}
                onSubmit={handleSubmit}
              >
                {view === "companies" ? (
                  <>
                    <FormTitle $title="Company" />
                    <FormGroup>
                      <Label $text="Name" $htmlfor="name" />
                      <InputText
                        $title="Name"
                        $name="name"
                        $onChange={handleChange}
                        $view={view}
                        $type="text"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label $text="Location" $htmlfor="location" />
                      <InputText
                        $title="Location"
                        $name="location"
                        $onChange={handleChange}
                        $view={view}
                        $type="text"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label $text="Contact" $htmlfor="contact" />
                      <InputText
                        $title="Contact"
                        $name="contact"
                        $onChange={handleChange}
                        $view={view}
                        $type="text"
                      />
                    </FormGroup>
                  </>
                ) : (
                  <>
                    <FormTitle $title="Vacancy" />
                    <FormGroup>
                      <Label $text="Title" $htmlfor="title" />
                      <InputText
                        $title="Title"
                        $name="title"
                        $onChange={handleChange}
                        $view={view}
                        $type="text"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label $text="Description" $htmlfor="description" />
                      <InputText
                        $title="Description"
                        $name="description"
                        $onChange={handleChange}
                        $view={view}
                        $type="text"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label $text="Status" $htmlfor="status" />
                      <InputSelect
                        $title="Status"
                        $name="status"
                        $onChange={handleChange}
                        $view={view}
                        $options={["ACTIVE", "INACTIVE"]}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label $text="Company" $htmlfor="company" />
                      <InputSelect
                        $title="Company"
                        $name="company"
                        $onChange={handleChange}
                        $view={view}
                        $options={["company 1", "company 2"]}
                      />
                    </FormGroup>
                  </>
                )}
                <FormGroup>
                  <ButtonForm $text="Submit" $view={view} />
                </FormGroup>
              </Form>
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
