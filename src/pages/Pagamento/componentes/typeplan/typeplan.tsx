import { Text } from "../../../../components/text/text";
import { Container, Stylefamily, Stylefamily1 } from "./typeplan.styles";

export const Typeplan = () => {
  return (
    <Container>
      <Stylefamily> 
        <Text color='preto' height={20} size='28' weight={600} > Plano Família  </Text> 
      </Stylefamily>
      <Stylefamily1> 
        <Text color='preto' height={40} size='22' weight={600} > R$ 100,00   </Text> 
      </Stylefamily1>
    </Container>
  )
}

export default Typeplan;