export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  title: string;
  message: string;
}

export interface Work {
  readonly title: string;
  readonly company: string;
  readonly period: string;
  readonly technologies: string;
  readonly missions: [];
  readonly detailIsDisplayed: boolean;
}

export interface Education {
  readonly degree?: string;
  readonly period?: string;
  readonly degree_level?: string;
  readonly university?: boolean;
}

export interface Blog {
  readonly id?: string;
  readonly name?: string;
  readonly images?: Image;
  readonly url?: string;
}

export interface Portfolio {
  readonly id: string;
  readonly name: string;
  readonly technologies: string;
  readonly images: Image;
  readonly detail: string;
  readonly codeSourceUrl: string;
  readonly detailIsDisplayed: boolean;
}

export interface Image {
  readonly title: string;
  readonly src: string;
}

export interface About {
  readonly about: string | null;
  readonly degree: string | null;
  readonly email: string | null;
  readonly github: string | null;
  readonly intro: string | null;
  readonly linkedin: string | null;
  readonly location: string | null;
  readonly profileImg: string | null;
  readonly relocate: string | null;
  readonly title: string | null;
}

export interface Home {
  readonly headlines: [];
  readonly name: string | null;
  readonly isLoaded: boolean;
}

export interface State {
  readonly id: string | null;
  readonly type: string | null;
  readonly about: About | null;
  readonly home: Home | null;
  readonly skills: Skills | null;
  readonly work: Work;
  readonly portfolio: Portfolio[];
  readonly education: Education | null;
  readonly blog: Blog[];
  readonly isLoaded: boolean;
  readonly error: string | null;
}
export interface Skills {
  readonly methodologies: skill[];
  readonly technologies: skill[];
  readonly tools: skill[];
}

export interface skill {
  readonly name: string | null;
  readonly percent: Number | null;
  readonly remark: string | null;
}
