// "use client";

// import { CompaniesService } from "@/services/companies.service";
// import { ICompanyPageable, IVacanciesPageable } from "@/utils/models/models";
// import { useEffect, useState } from "react";
// import { CardList } from "../organisms/Card-list";

// interface IProps {
//   searchParams: {
//     page: string;
//     size: string;
//   };
// }

// export const generateMetadata = async ({ searchParams }: IProps) => {
//   const page = searchParams.page ?? 1;
//   return {
//     title: `Admin Panel | Companies - Page ${page}`,
//     description: "Companies panel",
//   };
// };

// const companiesService = new CompaniesService();

// export default async function Companies({ searchParams }: IProps) {
//   const pageParam = searchParams.page ? parseInt(searchParams.page) : 1;
//   const size = searchParams.size ? parseInt(searchParams.size) : 6;

//   const [cardData, setCardData] = useState<
//     Array<ICompanyPageable | IVacanciesPageable>
//   >([]);

//   const companies = await companiesService.getCompanies(pageParam, size);
//   if (companies) {
//     setCardData(companies);
//   }

//   useEffect(() => {
//     fetchCardData(currentPage);
//   }, [view, currentPage]);

//   return (
//     <CardList
//       $data={cardData}
//       $currentPage={currentPage}
//       $totalPages={totalPages}
//       onPageChange={setCurrentPage}
//     />
//   );
// }
