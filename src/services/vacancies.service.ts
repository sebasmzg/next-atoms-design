import { HttpClient } from "@/utils/client-http";
import { IVacanciesResponse } from "@/utils/models/models";

export class VacanciesService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient();
  }

  private errorHandler(error: unknown, service: string) {
    console.error(error);
    throw new Error(`Error ${service}`);
  }

  async getAllvacancies() {
    try {
      const vacancies = await this.httpClient.get<IVacanciesResponse[]>("vacants");
      return vacancies;
    } catch (error) {
      this.errorHandler(error, "fetching vacancies.");
    }
  }

  async getVacancyById(id: string) {
    try {
      const vacancy = await this.httpClient.getById<IVacanciesResponse>("vacants", id);
      return vacancy;
    } catch (error) {
      this.errorHandler(error, "fetching vacancy by id.");
    }
  }

  async updateVacancy<IVacancy>(id: string, data: IVacancy) {
    try {
      const vacancy = await this.httpClient.put("vacants", id, data);
      return vacancy;
    } catch (error) {
      this.errorHandler(error, "updating vacancy.");
    }
  }

  async deleteVacancy(id: string) {
    try {
      const vacancy = await this.httpClient.delete("vacants", id);
      return vacancy;
    } catch (error) {
      this.errorHandler(error, "deleting vacancy.");
    }
  }

  async createVacancy<IVacancy>(data: IVacancy) {
    try {
      const vacancy = await this.httpClient.post("vacants", data);
      return vacancy;
    } catch (error) {
      this.errorHandler(error, "creating vacancy.");
    }
  }
}
