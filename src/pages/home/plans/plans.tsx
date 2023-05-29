import { Text } from "../../../components/text/text";
import { CardPlans } from "./cardplans";

import { Header, SubTitle, Title } from "./cardplans.styles";

export const Plans = () => {
  return (
    <div>
    <Header>
        <Title>
          <Text weight={700} height={48} color="branco" size="32">
            Conheça nossos planos
          </Text>
        </Title>
        <SubTitle>
          <Text weight={400} height={22} color="branco" size="18">
            Experimente nossas soluções e escolha o plano ideal para o seu
            próximo projeto.
          </Text>
        </SubTitle>
      </Header>
      <CardPlans/>
      </div>
      )
};

