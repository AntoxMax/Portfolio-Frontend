export type dataObject = {
  firstBlock: FirstBlockTypes;
  skills: skillsType[];
  textAboutMe: TextAboutMeTypes;
  contacts: ContactTypes[];
};

export interface FirstBlockTypes {
  title1: string;
  title2: string;
  imageUrl: string;
}

export interface TextAboutMeTypes {
  text: string;
  imageUrl: string;
}

export interface ContactTypes {
  iconUrl: string;
  textContact: string;
  urlContact: string;
}

export type skillsType = { title: string; skills: string[] };
