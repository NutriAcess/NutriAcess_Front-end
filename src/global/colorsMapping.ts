import { theme } from "./theme";

export type TColors =
  | "vinho"
  | "amarelo"
  | "laranja_claro"
  | "laranja_medio"
  | "laranja_escuro"
  | "laranja_destaque"
  | "branco"
  | "preto"
  | "cinza";

export const colorsMapping = (color: TColors) => {
  const colorsMap = {
    vinho: theme.Colors.vinho,
    amarelo: theme.Colors.amarelo,
    laranja_claro: theme.Colors.laranja_claro,
    laranja_medio: theme.Colors.laranja_medio,
    laranja_escuro: theme.Colors.laranja_escuro,
    branco: theme.Colors.branco,
    preto: theme.Colors.preto,
    laranja_destaque: theme.Colors.laranja_destaque,
    cinza: theme.Colors.cinza,
  };

  return colorsMap[color];
};
