
import Header from "../components/header/header"
import { Text } from "../components/text/text"
import Plans from "../home/plans/plans"
import { Container, Emphasis, SectionPlan } from "./planos.styles"

export const Planos = () => {
  return (
    <Container>
        <Header/>
        <Emphasis>
            <Text height={2} weight={400} color="branco" size="36" >
            Nutrição acessível, saúde imbatível!
            </Text>
            <Text height={2} weight={400} color="branco" size="64" >
            Preços simples e opções flexíveis 
            </Text>
        </Emphasis>
        <SectionPlan>
            <Plans/>
        </SectionPlan>
    </Container>
  )
}

