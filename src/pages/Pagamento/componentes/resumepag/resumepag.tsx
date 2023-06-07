import { Text } from "../../../../components/text/text";
import { Container, Line, SectionValue, SectionValuePlan } from "./resumepag.styles";


export const ResumePag = () => {
  return (
    <Container>
        <Text color='preto' height={40} size='28' weight={600} > Resumo do pagamento  </Text>
      <SectionValue>
        <SectionValuePlan>
          <Text color='preto' height={10} size='24' weight={400} > Valor Plano </Text>
          <Text color='preto' height={0} size='24' weight={400} > R$  100,00   </Text>
        </SectionValuePlan>
        <Line/>
        <SectionValuePlan>
          <Text color='preto' height={10} size='24' weight={600} > Total </Text>
          <Text color='vinho' height={0} size='24' weight={600} > R$  100,00   </Text>
        </SectionValuePlan>
      </SectionValue>
    </Container>
  );
};