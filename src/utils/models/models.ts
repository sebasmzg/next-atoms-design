//-------------COMPANIES

export interface ICompany {
    id:       string;
    name:     string;
    location: string;
    contact:  string;
}

export interface ICompanyRequest {
    name:     string;
    location: string;
    contact:  string;
}

export interface ICompanyResponse {
    id:       string;
    name:     string;
    location: string;
    contact:  string;
    vacants:  IVacant[];
}

export interface ICompanyPageable {
    totalPages:       number;
    totalElements:    number;
    pageable:         IPageable;
    numberOfElements: number;
    size:             number;
    content:          ICompanyResponse[];
    number:           number;
    sort:             ISort[];
    first:            boolean;
    last:             boolean;
    empty:            boolean;
}

//-------------VACANCIES

export interface IVacant {
    id:          string;
    title:       string;
    description: string;
    status:      string;
}

export interface IVacancy{
    title:       string;
    description: string;
    status:       string;
    id:          string;
    companyId:   string;
}

export interface IVacancyRequest {
    title:       string;
    description: string;
    status:      string;
    companyId:   string;
}

export interface IVacanciesResponse {
    id:          string;
    title:       string;
    description: string;
    status:      string;
    company:     ICompany;
}

export interface IVacanciesPageable {
    totalPages:       number;
    totalElements:    number;
    pageable:         IPageable;
    numberOfElements: number;
    size:             number;
    content:          IVacanciesResponse[];
    number:           number;
    sort:             ISort[];
    first:            boolean;
    last:             boolean;
    empty:            boolean;
}


//-------------PAGINATION

export interface IPageable {
    paged:      boolean;
    unpaged:    boolean;
    pageNumber: number;
    pageSize:   number;
    offset:     number;
    sort:       ISort[];
}

export interface ISort {
    direction:    string;
    nullHandling: string;
    ascending:    boolean;
    property:     string;
    ignoreCase:   boolean;
}