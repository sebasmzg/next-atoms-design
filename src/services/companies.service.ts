import { HttpClient } from "@/utils/client-http";
import { ICompany } from "@/utils/models/model";

export class CompaniesService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient();
  }

  private errorHandler(error: unknown, service: string) {
    console.error(error);
    throw new Error(`Error ${service}`);
  }

  async getAllCompanies() {
    try {
      const companies = await this.httpClient.get<ICompany[]>("companies");
      return companies;
    } catch (error) {
      this.errorHandler(error, "fetching companies.");
    }
  }

  async getCompanyById(id: string) {
    try {
      const company = await this.httpClient.getById<ICompany>("companies", id);
      return company;
    } catch (error) {
      this.errorHandler(error, "fetching company by id.");
    }
  }

  async updateCompany<ICompany>(id: string, data: ICompany) {
    try {
      const company = await this.httpClient.put("companies", id, data);
      return company;
    } catch (error) {
      this.errorHandler(error, "updating company.");
    }
  }

  async deleteCompany(id: string) {
    try {
      const company = await this.httpClient.delete("companies", id);
      return company;
    } catch (error) {
      this.errorHandler(error, "deleting company.");
    }
  }

  async createCompany<ICompany>(data: ICompany) {
    try {
      const company = await this.httpClient.post("companies", data);
      return company;
    } catch (error) {
      this.errorHandler(error, "creating company.");
    }
  }
}
