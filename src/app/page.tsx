"use client";

import Background from "@/components/atoms/Background";
import { Button } from "@/components/atoms/Button";
import { ButtonIcon } from "@/components/atoms/Button-icons";
import ButtonSwitch from "@/components/atoms/Button-switch";
import { SearchInput } from "@/components/atoms/SearchInput";
import Form from "@/components/molecules/Form";
import { useState } from "react";
import { FaBacteria, FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineModeEdit, MdWorkOutline } from "react-icons/md";
import { PiBuildingApartment } from "react-icons/pi";

export default function Home() {
  const [view, setView] = useState("vacantes");
  const handleSwitch = (isLeft: boolean) => {
    setView(isLeft ? "vacantes" : "companies");
  };
  return (
    <Background>
      <div>
        home
        <div>
          <ButtonSwitch
            $onSwitch={handleSwitch}
            $leftIcon={<MdWorkOutline />}
            $leftLabel="Vacantes"
            $rightIcon={<PiBuildingApartment />}
            $rightLabel="Compañías"
            $view={view}
          />
          <p>{view}</p>
        </div>
        <Form
          $onSubmit={(formData) => console.log(formData)}
          $view={view}
          $title="Vacantes"
        />
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
