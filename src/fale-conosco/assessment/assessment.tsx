import { Text } from "../../components/text/text";
import {
  Container,
  Title,
  DivNumber,
  Number,
  Feedback,
} from "./assessment.styled";

const Assessment = () => {
  return (
    <Container>
      <Title>
        <Text weight={600} height={1.7} color="preto" size="24">
          Sua avaliação é muito importante para nós!
        </Text>
      </Title>

      <Feedback>
        <DivNumber>
          <Number> 0 </Number>
        </DivNumber>
        <DivNumber>
          <Number> 1 </Number>
        </DivNumber>
        <DivNumber>
          <Number> 2 </Number>
        </DivNumber>
        <DivNumber>
          <Number> 3 </Number>
        </DivNumber>
        <DivNumber>
          <Number> 4 </Number>
        </DivNumber>
        <DivNumber>
          <Number> 5 </Number>
        </DivNumber>
        <DivNumber>
          <Number> 6 </Number>
        </DivNumber>
        <DivNumber>
          <Number> 7 </Number>
        </DivNumber>
        <DivNumber>
          <Number> 8 </Number>
        </DivNumber>
        <DivNumber>
          <Number> 9 </Number>
        </DivNumber>
        <DivNumber>
          <Number> 10 </Number>
        </DivNumber>
      </Feedback>
   
      <Title>
        <Text weight={600} height={1.7} color="preto" size="24">
          Como podemos te ajudar?
        </Text>
      </Title>
    </Container>
  );
};

export default Assessment;
