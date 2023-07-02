export interface IGetUser {
  email: string;
  password: string;
}

export enum ObjectiveEnum {
  lost_weight = "Perder peso",
  maintain_my_current = "Manter peso",
  gain_muscular_mass = "Ganhar massa",
}

export enum GenderEnum {
  man = "Masculino",
  woman = "Feminino",
  other = "Outro",
}

export enum FeedingEnum {
  sedentary = "Sedentarismo",
  moderate = "Atividade fisica moderada",
  intensive = "Atividade fisica intensa",
}

export enum FoodRestrictionEnum {
  any_thing = "Qualquer coisa",
  vegetarian = "Vegetariano",
  vegan = "Vegano",
}

export enum ALERGIA {
  GLUTEN = "gluten",
  LATICINIOS = "laticinios",
  AMENDOIM = "amendoim",
  PEIXES = "peixes",
  OVOS = "ovos",
  MARISCOS = "mariscos",
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
  plano: PlanEnum;
};
export enum AVALIACAO {
  um = '1',
  dois = '2',
  tres = '3',
  quatro = '4',
  cinco = '5',
  seis = '6',
  sete = '7',
  oito = '8',
  nove = '9',
  dez = '10'
}
export type FaleConosco = {
  avaliacao: AVALIACAO,
  nome_usuario: string,
  email: string,
  mensagem: string
}

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

export enum SpecialtyNutriEnum {
  sport = "Nutrição Esportiva",
  functional = "Nutrição Funcional",
  esthetics = "Nutrição Estética",
  integrative  = "Nutrição Integrativa",
  maternalChild  = "Nutrição Materno-Infantil",
  family = "Nutrição Familiar"
}

export enum PlanEnum {
  plus1 = "plus1",
  familia = "familia",
  plus2 = "plus2"
}