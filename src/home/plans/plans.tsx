import { Text } from "../../components/text/text";
import CardPlan from "../components/cardPlan/cardPlan";
import { TopicsFamilia, TopicsPlus, TopicsPremium } from "./data";
import {
  CardPlanGlobal,
  Container,
  Header,
  Plan,
  SubTitle,
  Title,
} from "./plans.styles";

const Plans = () => {
  return (
    <Container>
      <Header>
        <Title>
          <Text weight={600} height={1.7} color="branco" size="32">
            Conheça nossos planos
          </Text>
        </Title>
        <SubTitle>
          <Text weight={400} height={1.7} color="branco" size="20">
            Experimente nossas soluções e escolha o plano ideal para o seu
            próximo projeto.
          </Text>
        </SubTitle>
      </Header>
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
            variant="primario"
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
            variant="terciario"
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
              duration: "por 3 meses",
            }}
            topics={TopicsPremium}
            variant="primario"
          />
        </CardPlanGlobal>
      </Plan>
    </Container>
  );
};

export default Plans;
