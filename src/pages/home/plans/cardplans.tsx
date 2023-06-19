import CardPlan from "../components/cardPlan/cardPlan";
import {
  CardPlanGlobal,
  Plan
} from "./cardplans.styles";
import { TopicsFamilia, TopicsPlus, TopicsPremium } from "./data";

export const CardPlans = () => {
  return (
      <Plan>
        <CardPlanGlobal shadow="secundario">
          <CardPlan
            destaque="secundario"
            shadow="secundario"
            titleplan="Plus 1"
            description="Venha conhecer as vantagens do plano Plus 1!"
            plan={{
              value: 50,
              duration: "por mês",
            }}
            topics={TopicsPlus}
            variant="terciario"
          />
        </CardPlanGlobal>

        <CardPlanGlobal shadow="primario">
          <CardPlan
            destaque="primario"
            shadow="primario"
            titleplan="Plano Família"
            description="Venha conhecer as vantagens do plano Família!"
            plan={{
              value: 120,
              duration: "por mês",
            }}
            topics={TopicsFamilia}
            variant="primario"
          />
        </CardPlanGlobal>

        <CardPlanGlobal shadow="secundario">
          <CardPlan
            destaque="secundario"
            shadow="secundario"
            titleplan="Plus 2"
            description="Venha conhecer as vantagens do plano Plus 2!"
            plan={{
              value: 100,
              duration: "3 meses",
            }}
            topics={TopicsPremium}
            variant="terciario"
          />
        </CardPlanGlobal>
      </Plan>
  );
};

