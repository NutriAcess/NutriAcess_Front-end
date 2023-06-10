import ImagemPlanos from "../../assets/imagemplanos.svg"
import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import { Text } from "../../components/text/text"
import { CardPlans } from "../home/plans/cardplans"

import { Container, HeaderPlans, Imagem, SectionMeet, SectionPlans, SectionText } from "./planos.styles"


export const Planos = () => {
    return (
        <Container>
            <Header />
            <HeaderPlans>
                <Text height={53} weight={400} size="32" color="branco">Nutrição acessível, saúde imbatível!</Text>
                <Text height={64} weight={700} size="42" color="branco" >Preços simples e opções flexíveis </Text>
            </HeaderPlans>

            <SectionMeet>
                <Imagem><img src={ImagemPlanos} alt="Imagem mulher com notebook" /></Imagem>
                <SectionText>
                    <Text height={47} weight={700} size="32" color="vinho">Conheça nossos planos</Text>
                    <Text height={24} weight={400} size="20" color="preto" >Com a NutriAcess, você tem acesso planos com valores acessíveis, segurança e praticidade </Text>
                </SectionText>
            </SectionMeet>

            <SectionPlans>
                <CardPlans />
            </SectionPlans>

            <Footer />
        </Container>
    )
}
