import { HttpClient } from "@/utils/client-http";
import { ICompanyPageable, ICompanyResponse } from "@/utils/models/models";

export class CompaniesService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient();
  }

  private errorHandler(error: unknown, service: string) {
    console.error(error);
    throw new Error(`Error ${service}`);
  }

  async getCompanies(page: number, size: number) {
    try {
      const companies = await this.httpClient.get<ICompanyPageable | undefined>(`company?page=${page}&size=${size}`);
      return companies;
    } catch (error) {
      this.errorHandler(error, "fetching companies.");
    }
  }

  async getAllCompanies() {
    try {
      const companies = await this.httpClient.get<ICompanyResponse[]>("company/all");
      return companies;
    } catch (error) {
      this.errorHandler(error, "fetching companies.");
    }
  }

  async getCompanyById<ICompany>(id: string) {
    try {
      const company = await this.httpClient.getById<ICompany>("company", id);
      return company;
    } catch (error) {
      this.errorHandler(error, "fetching company by id.");
    }
  }

  async updateCompany<ICompanyResponse, ICompany>(id: string, data: ICompany){
    try {
      const company = await this.httpClient.put<ICompanyResponse, ICompany>("company", id, data);
      return company;
    } catch (error) {
      this.errorHandler(error, "updating company.");
    }
  }

  async deleteCompany(id: string) {
    try {
      const company = await this.httpClient.delete("company", id);
      return company;
    } catch (error) {
      this.errorHandler(error, "deleting company.");
    }
  }

  async createCompany<ICompany>(data: ICompany) {
    try {
      const company = await this.httpClient.post<ICompanyResponse,ICompany>("company", data);
      return company;
    } catch (error) {
      this.errorHandler(error, "creating company.");
    }
  }
}
