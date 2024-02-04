export enum Statuses {
  Loading = "LOADING",
  Success = "SUCCESS",
  Error = "ERROR",
}

export enum projectCategories {
  NoCategory = "NoCATEGORY",
  Pet = "PET",
  Frilans = "FRILANS",
  Commercial = "COMMERCIAL",
}

export interface Project {
  _id: string;
  title: string;
  text: string;
  category: string;
  link: string;
  gitLink: string;
  imageUrl: string;
  skills: string[];
}
