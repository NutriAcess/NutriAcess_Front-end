export interface ICardPlan {
  variant: "primario" | "secundario" | "terciario";
  titleplan: string;
  destaque: "primario" | "secundario";
  shadow: "primario" | "secundario";
  description: string;
  plan: {
    value: number;
    duration: string;
  };
  topics: {
    isChecked: boolean;
    title: string;
  }[];
}
