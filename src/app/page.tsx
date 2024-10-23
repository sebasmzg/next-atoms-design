'use client';

import Background from "@/components/atoms/Background";
import { Button } from "@/components/atoms/Button";
import { ButtonIcon } from "@/components/atoms/Button-icons";
import Form from "@/components/molecules/Form";
import { useState } from "react";
import { FaBacteria, FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineModeEdit } from "react-icons/md";

export default function Home() {
  const [view, setView] = useState('vacantes');
  return (
    <Background>
      <div>
        home
        <div>
          <button onClick={() => setView('vacantes')}>Vacantes</button>
          <button onClick={() => setView('companies')}>Compañías</button>
          <p>{view}</p>
        </div>
        <Form $onSubmit={(formData) => console.log(formData)} $view={view} $title="prueba" />
        <Button $icon={<FaBacteria />} $text="Click agregar" $view={view} $onClick={() => console.log('click')}/>
        <ButtonIcon $icon={<MdOutlineModeEdit color="blue"/>}/>
        <ButtonIcon $icon={<FaRegTrashAlt color="red"/>}/>
      </div>
    </Background>
  );
}
