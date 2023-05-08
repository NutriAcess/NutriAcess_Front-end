import { Text } from "../../components/text/text";
import { Container, SubTitle, Title } from "./plans.styles";

const Plans = () => {
  return (
    <Container>
      <Title>
        <Text weight={600} height={1.7} color="branco" size="32">
          Conheça nossos planos
        </Text>
      </Title>
      <SubTitle>
        <Text weight={400} height={1.7} color="branco" size="24">
          Experimente nossas soluções e escolha o plano ideal para o seu próximo
          projeto.
        </Text>
      </SubTitle>
    </Container>
  );
};

export default Plans;
