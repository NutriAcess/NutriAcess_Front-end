import CardPlan from "../components/cardPlan/cardPlan";
import { TopicsFamilia, TopicsPlus, TopicsPremium } from "./data";
import {
  CardPlanGlobal,
  Container,
  Plan,
} from "./plans.styles";

const Plans = () => {
  return (
    <Container>
      <Plan>
        <CardPlanGlobal shadow="secundario">
          <CardPlan
            destaque="secundario"
            shadow="secundario"
            titleplan="Plus"
            description="Venha conhecer as vantagens do plano Plus!"
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
            titleplan="Plano Premium"
            description="Venha conhecer as vantagens do plano Premium!"
            plan={{
              value: 100,
              duration: "3 meses",
            }}
            topics={TopicsPremium}
            variant="terciario"
          />
        </CardPlanGlobal>
      </Plan>
    </Container>
  );
};

export default Plans;
