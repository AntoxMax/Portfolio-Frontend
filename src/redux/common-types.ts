export enum Statuses {
  Loading = "LOADING",
  Success = "SUCCESS",
  Error = "ERROR",
}

export enum projectCategories {
  NoCategory = "Без категории",
  Pet = "ПЭТ-проект",
  Frilans = "Фриланс",
  Commercial = "Коммерческий опыт",
}

export interface Project {
  _id: string;
  title: string;
  text: string;
  category: projectCategories;
  link: string;
  gitLink: string;
  imageUrl: string;
  skills: string[];
}
