export interface IGetUser {
  email: string;
  password: string;
}

export enum ObjectiveEnum {
  lost_weight = "Perder peso",
  maintain_my_current = "Manter meu peso atual",
  gain_muscular_mass = "Ganhar massa muscular",
}

export enum GenderEnum {
  man = "Masculino",
  woman = "Feminino",
  other = "Outro",
}

export enum FeedingEnum {
  sedentary = "Sedentarismo",
  moderate = "Atividade física moderada",
  intensive = "Atividade física intensiva",
}

export enum FoodRestrictionEnum {
  any_thing = "Qualquer coisa",
  vegetarian = "Sou vegetariano(a)",
  vegan = "Sou vegano(a)",
}

export enum PreparationTimeEnum {
  yes = "Sim",
  not = "Não",
}

export enum AvatarsEnum {
  avatarUva = "avatarUva",
  avatarMaca = "avatarMaca",
  avatarLaranja = "avatarLaranja",
  avatarAbacaxi= "avatarAbacaxi",
}

export type TForm = {
  id_formulario: string;
  nome: string;
  objetivo: ObjectiveEnum;
  genero: GenderEnum;
  altura: number;
  idade: number;
  peso: number;
  capacidade_fisica: FeedingEnum;
  restricao_alimentar: FoodRestrictionEnum;
  tempo_preparo: PreparationTimeEnum;
  foto: AvatarsEnum;
  id_cliente: string;
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

export type TSignUpUserResponse = {
  token: string;
  message: string;
};

export type TSignUpEspResponse = {
  token: string;
  message: string;
};

export interface ISignInUser {
  email: string;
  senha: string;
}
export interface ISignInEps {
  crn: string;
  senha: string;
}

export type TUser = {
  email: string;
  id_cliente: string;
  nome_completo: string;
  nome_social: string;
};

export type TEsp1 = {
  email: string;
  id_cliente?: string;
  nome_completo: string;
  nome_social: string;
  crn: string;
}

export type TSignInUserResponse = {
  user: TUser;
  form?: TForm;
};
export type TSignInEspResponse = {
  usereps: TEsp1;
};
