import { Text } from "../../components/text/text";
import CardFeedback from "../components/cardFeedback/cardFeedback";
import { Container, Title } from "./feedback.styles";
import userfeedback from "../../assets/UserFeedback.svg";
import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";

const Feedback = () => {
  return (
    <Container>
      <Title>
        <Text weight={600} height={1.7} color="preto" size="24">
          Feedback dos Usuários
        </Text>
      </Title>

      <ArrowCircleLeft color="#000" />
      <CardFeedback
        image={{ alt: "Usuário Gabriel Augusto", url: userfeedback }}
        name="Gabriel Augusto"
        description="Comecei a mudar minha vida através da NutriAcess no início desse ano e já vejo resultados. A nutricionista Amanda vem me ajudando a melhorar minha saúde por meio da alimentação e estou cada dia mais feliz!"
      />
      <CardFeedback
        image={{ alt: "Usuário Gabriel Augusto", url: userfeedback }}
        name="Gabriel Augusto"
        description="Comecei a mudar minha vida através da NutriAcess no início desse ano e já vejo resultados. A nutricionista Amanda vem me ajudando a melhorar minha saúde por meio da alimentação e estou cada dia mais feliz!"
      />
      <CardFeedback
        image={{ alt: "Usuário Gabriel Augusto", url: userfeedback }}
        name="Gabriel Augusto"
        description="Comecei a mudar minha vida através da NutriAcess no início desse ano e já vejo resultados. A nutricionista Amanda vem me ajudando a melhorar minha saúde por meio da alimentação e estou cada dia mais feliz!"
      />
      <ArrowCircleRight color="#000" />
    </Container>
  );
};

export default Feedback;
