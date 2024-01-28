export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  title: string;
  message: string;
}

export interface cv {
  readonly title?: string;
  readonly company?: string;
  readonly period?: string;
  readonly technologies?: string;
  readonly missions?: [];
  readonly detailIsDisplayed?: boolean;
}

export interface blog {
  readonly id?: string;
  readonly name?: string;
  readonly images?: image[];
  readonly url?: string;
}

export interface portfolio {
    readonly id?: string;
    readonly name?: string;
    readonly technologies: string;
    readonly images?: image[];
    readonly detail: string;
    readonly codeSourceUrl?: string;
    readonly detailIsDisplayed?: boolean;
}

interface image {
  readonly title: string;
  readonly src: string;
}
