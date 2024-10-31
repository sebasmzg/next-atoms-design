import { useCompanies } from "@/hooks/useCompanies";
import { CardList } from "../organisms/Card-list";

export default function Companies() {
  const { cardData, currentPage, totalPages, setCurrentPage } = useCompanies();

  return (
    <CardList
      $data={cardData}
      $currentPage={currentPage}
      $totalPages={totalPages}
      onPageChange={setCurrentPage}
    />

  );
}