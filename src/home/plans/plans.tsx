import Button from "../../components/button/button";
import { Text } from "../../components/text/text";
import CardPlan from "../components/cardPlan/cardPlan";
import {
  CardPlanGlobal,
  Container,
  DivButton,
  Header,
  Plan,
  SubTitle,
  Title,
} from "./plans.styles";

const TopicsPlus = [
  {
    isChecked: true,
    title: "1 consulta por mês",
  },
  {
    isChecked: true,
    title: "Suporte online",
  },
  {
    isChecked: false,
    title: "Notificação - Lembrete",
  },
  {
    isChecked: false,
    title: "Acompanhamento pessoal",
  },
];

const TopicsFamilia = [
  {
    isChecked: true,
    title: "1 consulta por mês",
  },
  {
    isChecked: true,
    title: "Suporte online",
  },
  {
    isChecked: true,
    title: "Notificação - Lembrete",
  },
  {
    isChecked: true,
    title: "Acompanhamento pessoal",
  },
];

const TopicsPremium = [
  {
    isChecked: true,
    title: "1 consulta por mês",
  },
  {
    isChecked: true,
    title: "Suporte online",
  },
  {
    isChecked: true,
    title: "Notificação - Lembrete",
  },
  {
    isChecked: true,
    title: "Acompanhamento pessoal",
  },
];

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
          />
          <DivButton>
            <Button
              variant="primario"
              title="Assinar"
              border={10}
              padding={12}
              width={250}
              size={14}
            ></Button>
          </DivButton>
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
          />
          <DivButton>
            <Button
              variant="terciario"
              title="Assinar"
              border={10}
              padding={12}
              width={250}
              size={14}
            ></Button>
          </DivButton>
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
          />
          <DivButton>
            <Button
              variant="primario"
              title="Assinar"
              border={10}
              padding={12}
              width={250}
              size={14}
            ></Button>
          </DivButton>
        </CardPlanGlobal>
      </Plan>
    </Container>
  );
};

export default Plans;
