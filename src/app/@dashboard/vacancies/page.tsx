import Vacancies from "@/components/templates/Vacancy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vacancies",
  description: "Vacancies management",
};

const VacanciesPage = () => {
  return (
    <div>
      <Vacancies />
    </div>
  );
};

export default VacanciesPage;