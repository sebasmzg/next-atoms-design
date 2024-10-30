"use client"
import { CompaniesService } from "@/services/companies.service"
import {  ICompanyResponse } from "@/utils/models/models";
import { useEffect, useState } from "react";

const companiesService = new CompaniesService();
export const useAllCompanies = () => {
    const [companies, setCompanies] = useState<ICompanyResponse[] | null>(null);

    const fetchCompanies = async () => {
        try {
            const response = await companiesService.getAllCompanies();
            if(response){
                setCompanies(response);
            }
        } catch (error) {
            console.error("Error fetching companies data: ", error);
        } 
    }
    useEffect(() => {
        fetchCompanies();
    }, []);

    return {
        companies,
        fetchCompanies,
    }
}