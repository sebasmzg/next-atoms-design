"use client";

import Background from "@/components/atoms/Background";
import { Button } from "@/components/atoms/Button";
import { ButtonIcon } from "@/components/atoms/Button-icons";
import ButtonSwitch from "@/components/atoms/Button-switch";
import { Card } from "@/components/atoms/Card";
import { SearchInput } from "@/components/atoms/SearchInput";
import { CardList } from "@/components/molecules/Card-list";
import Form from "@/components/molecules/Form";
import { ICompany, IVacancies } from "@/utils/models/model";
import { useEffect, useState } from "react";
import { FaBacteria, FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineModeEdit, MdWorkOutline } from "react-icons/md";
import { PiBuildingApartment } from "react-icons/pi";

export default function Home() {
  const [view, setView] = useState("vacantes");
  const [loading, setLoading] = useState(true);
  const [cardData, setCardData] = useState<Array<ICompany | IVacancies>>([]);
  const handleSwitch = (isLeft: boolean) => {
    setView(isLeft ? "vacantes" : "companies");
  };
  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await fetch(
          view === "vacantes"
          ? "https://671638f633bc2bfe40bcf693.mockapi.io/api/v1/vacancies"
          : "https://671638f633bc2bfe40bcf693.mockapi.io/api/v1/companies"
        );
        const data = await response.json();
        console.log(data);
        setCardData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCardData();
  }, []);

  return (
    <Background>
      <div>
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
        <Form
          $onSubmit={(formData) => console.log(formData)}
          $view={view}
          $title="Vacantes"
        />
        <div>
          <h2>Card List</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <CardList
              $data={cardData}
            />
          )}
        </div>
        <Button
          $icon={<FaBacteria />}
          $text="Click agregar"
          $view={view}
          $onClick={() => console.log("click")}
        />
        <ButtonIcon $icon={<MdOutlineModeEdit color="blue" />} />
        <ButtonIcon $icon={<FaRegTrashAlt color="red" />} />
        <SearchInput $placeholder="Search..." />
      </div>
    </Background>
  );
}
