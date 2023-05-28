import { InstagramLogo } from "phosphor-react";
import Button from "../../components/button/button";
import Header from "../../components/header/header";
import { Text } from "../../components/text/text";
import { ButtonConfirm, ButtonPlans, Calendar, Container, Content, Image, Infos } from "./CardConsulta.styles";

interface ICardMarcarConsulta {
    image: {
        url: string;
        alt: string;
    },
    nutricionist: string;
    socialMedia: string;
}

export const CardMarcarConsulta = ({image, nutricionist, socialMedia} : ICardMarcarConsulta) => {
  return (
    <Container>
        <Header/>
        <Content>
            <Infos>
            <Image>
                <img src={image.url} alt={image.alt}></img>
            </Image>
                <Text height={47} weight={400} color="branco" size="32">
                    {nutricionist}
                </Text>
            
                <Text height={16} weight={400} color="branco" size="18" >
                <InstagramLogo/>{socialMedia}
                </Text>
            </Infos>

            <Calendar>
            <ButtonConfirm>
                <Button variant="primario" title="Confirmar consulta"/>
                </ButtonConfirm>

                <ButtonPlans>
                <Button variant="primario" title="Veja nossos planos"/>
            </ButtonPlans>
            </Calendar>

            
        </Content>
    </Container>
  )
}
