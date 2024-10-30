"use client";

import { CompaniesService } from "@/services/companies.service";
import { ICompanyPageable } from "@/utils/models/models";
import { useEffect, useState } from "react";
import { CardList } from "../organisms/Card-list";

const companiesService = new CompaniesService();

export default function Companies() {
  const [cardData, setCardData] = useState<Array<ICompanyPageable>>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchCardData = async (page: number = 1, size: number = 6) => {
    try {
        const response = await companiesService.getCompanies(page, size);       
        if (response){
            setCardData(response);
            setCurrentPage(response.number + 1);
            setTotalPages(response.totalPages);
        }
    } catch (error) {
        console.error("Error fetching companies data: ", error);
    }
  };

  useEffect(() => {
    fetchCardData(currentPage);
  }, [currentPage]);

  return (
    <CardList
      $data={cardData}
      $currentPage={currentPage}
      $totalPages={totalPages}
      onPageChange={setCurrentPage}
      $view="company"
    />
  );
}
