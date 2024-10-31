import Companies from "@/components/templates/Company";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Companies",
  description: "Companies management",
};

const CompaniesPage = () => {
  return (
    <div>
      <Companies />
    </div>
  );
};

export default CompaniesPage;