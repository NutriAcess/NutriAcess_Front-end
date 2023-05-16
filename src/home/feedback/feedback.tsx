import { Text } from "../../components/text/text";
import CardFeedback from "../components/cardFeedback/cardFeedback";
import { CardFeedbackIcon, Container, Title } from "./feedback.styles";
import userfeedbackgabs from "../../assets/UserFeedbackgabs.svg";
import userfeedbackdavy from "../../assets/UserFeedbackdavy.svg";
import userfeedbackalinny from "../../assets/UserFeedbackalinny.svg";
import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";

const Feedback = () => {
  return (
    <Container>
      <Title>
        <Text weight={600} height={1.7} color="preto" size="28">
          Feedback dos Usuários
        </Text>
      </Title>
      <CardFeedbackIcon>
        <ArrowCircleLeft color="#000" size="40" />
        <CardFeedback
          image={{ alt: "Usuário Gabriel Augusto", url: userfeedbackdavy }}
          name="Davy Souza"
          description="Antes de começar a utilizar a plataforma NutriAcess, minha alimentação era desequilibrada e eu sofria com problemas de saúde constantes. Desde que comecei a seguir as orientações do nutricionista Rogério, minha vida mudou completamente. "
        />

        <CardFeedback
          image={{ alt: "Usuário Gabriel Augusto", url: userfeedbackgabs }}
          name="Gabriel Augusto"
          description="Comecei a mudar minha vida através da NutriAcess no início desse ano e já vejo resultados. A nutricionista Amanda vem me ajudando a melhorar minha saúde por meio da alimentação e estou cada dia mais feliz!"
        />

        <CardFeedback
          image={{ alt: "Usuário Gabriel Augusto", url: userfeedbackalinny }}
          name="Alinny Ribeiro"
          description="A NutriAcess e a nutricionista Camilla foram uma verdadeira bênção em minha vida.Depois de me cadastrar na plataforma, recebi um plano alimentar personalizado e suporte contínuo da Camilla. Os resultados foram surpreendentes!"
        />
        <ArrowCircleRight color="#000" size="40" />
      </CardFeedbackIcon>
    </Container>
  );
};

export default Feedback;
