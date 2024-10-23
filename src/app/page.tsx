'use client';

import Background from "@/components/atoms/Background";
import Form from "@/components/molecules/Form";
import { useState } from "react";

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
        <Form onSubmit={(formData) => console.log(formData)} view={view} title="prueba" />
      </div>
    </Background>
  );
}
