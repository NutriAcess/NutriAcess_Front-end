
import { Text } from "../../../../components/text/text";
import { mocksSchedulingPlan } from "./mock-schedulingPlan";
import { Container } from "./schedulingPlan.styles";

export const SchedulingPlan = () => {

  return (
    <>
      {mocksSchedulingPlan.map((item) => {
        return (
          <Container>
              <Text color="preto" height={30} size="20" weight={400}>
                <div>Nome: {item.name}</div>
                <div>Idade: {item.age}</div>
                <div>Sexo: {item.sex}</div>
                <div>Altura: {item.height}</div>
                <div>Peso: {item.weight}</div>
              </Text>
          </Container>
        );
      })}
    </>

  );
};
