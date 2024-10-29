import { HttpClient } from "@/utils/client-http";
import { IVacanciesPageable, IVacanciesResponse } from "@/utils/models/models";

export class VacanciesService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient();
  }

  private errorHandler(error: unknown, service: string) {
    console.error(error);
    throw new Error(`Error ${service}`);
  }

  async getVacancies(page: number, size: number) {
    try {
      const vacancies = await this.httpClient.get<IVacanciesPageable[]>(
        `vacants?page=${page}&size=${size}`
      );
      return vacancies;
    } catch (error) {
      this.errorHandler(error, "fetching vacancies.");
    }
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
      const vacancy = await this.httpClient.put<IVacanciesResponse, IVacancy>("vacants", id, data);
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
      const vacancy = await this.httpClient.post<IVacanciesResponse, IVacancy>("vacants", data);
      return vacancy;
    } catch (error) {
      this.errorHandler(error, "creating vacancy.");
    }
  }
}
