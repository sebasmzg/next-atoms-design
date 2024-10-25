export interface ICompany {
    name:    string;
    city:    string;
    contact: string;
    id:      string;
}

export interface IVacancy {
    title:       string;
    description: string;
    state:       string;
    id:          string;
    companyId:   string;
}
