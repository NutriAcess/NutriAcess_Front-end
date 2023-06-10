export interface IGetUser {
  email: string;
  password: string;
}

export enum ObjectiveEnum {
  lost_weight = "Perder peso",
  maintain_my_current = "Manter meu peso atual",
  gain_muscular_mass = "Ganhar massa muscular",
}

export enum Gender {
  man = "Homem",
  woman = "Mulher",
  other = "Outro",
}

export enum Feeding {
  sedentary = "Sedentarismo",
  moderate = "Atividade física moderada",
  intensive = "Atividade física intensiva",
}

export enum FoodRestriction {
  any_thing = "Qualquer coisa",
  vegetarian = "Sou vegetariano(a)",
  vegan = "Sou vegano(a)",
}

export enum PreparationTime {
  yes = "Sim",
  not = "Não",
}

export type TForm = {
  id: number;
  name: string;
  objetivo: ObjectiveEnum;
  genero: Gender;
  altura: number;
  idade: number;
  peso: number;
  alimentacao: Feeding;
  restricao_alimentar: FoodRestriction;
  tempo_preparo: PreparationTime;
  foto: string;
  nome: string;
  id_client: number;
};

export type TSignInUser = {
  client: {
    id_client: number;
    nome_completo: string;
    nome_social: string;
    email: string;
    formulario: TForm;
  };
  profiles: {
    form: TForm;
  }[];
};
