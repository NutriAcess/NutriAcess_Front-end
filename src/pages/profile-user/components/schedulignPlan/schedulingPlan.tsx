
import { Text } from "../../../../components/text/text";
import { Container } from "./schedulingPlan.styles";

export const SchedulingPlan = () => {

  return (
    <Container>
        <div>
          <Text color="preto" height={26} size="22" weight={500}>
          Nome: Marcos
          </Text>
        </div>
        <div>
          <Text color="preto" height={26} size="22" weight={500}>
          Idade: 30 anos
          </Text>
        </div>

        <div>
          <Text color="preto" height={26} size="22" weight={500}>
          Sexo: Masculino 
          </Text>
        </div>

        <div>
          <Text color="preto" height={26} size="22" weight={500}>
          Altura: 1,70
          </Text>
        </div>

        <div>
          <Text color="preto" height={26} size="22" weight={500}>
          Peso: 70kg
          </Text>
        </div>

    </Container>
  );
};
