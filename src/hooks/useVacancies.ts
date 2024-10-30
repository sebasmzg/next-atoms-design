"use client";

import { VacanciesService } from "@/services/vacancies.service";
import { IVacanciesPageable } from "@/utils/models/models";
import { useEffect, useState } from "react";

export const useVacancies = () => {
  const [cardData, setCardData] = useState<IVacanciesPageable | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const vacanciesService = new VacanciesService();
  const fetchCardData = async (page: number = 1, size: number = 6) => {
    try {
      const response = await vacanciesService.getVacancies(page, size);
      if (response) {
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

  return {
    cardData,
    currentPage,
    totalPages,
    fetchCardData,
    setCurrentPage,
  };
};
