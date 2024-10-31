"use client";

import { useVacancies } from "@/hooks/useVacancies";
import { CardList } from "../organisms/Card-list";

export default function Vacancies() {
  const { cardData, currentPage, totalPages, setCurrentPage } = useVacancies();

  return (
    <CardList
      $data={cardData}
      $currentPage={currentPage}
      $totalPages={totalPages}
      onPageChange={setCurrentPage}
    />
  );
}
