import { InstagramLogo } from "phosphor-react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Button from "../../components/button/button";
import { Text } from "../../components/text/text";
import { ButtonConfirm, ButtonPlans, CalendarWrapper, Container, Content, ContentCalender, DatePicker, Image, Infos } from "./CardConsulta.styles";

import { ptBR } from "date-fns/locale";

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
            
            <ContentCalender>
            <CalendarWrapper>
                <DatePicker
                weekdayDisplayFormat="EEEEEE"
                showDateDisplay={false}
                direction="horizontal"
                onChange={() => {}}
                locale={ptBR}
                months={1}
                />
            </CalendarWrapper>

            <ButtonConfirm>
                <Button variant="primario" title="Confirmar consulta"/>
            </ButtonConfirm>
            </ContentCalender>
            
            </Content>

            <ButtonPlans>
                <Button variant="primario" title="Veja nossos planos"/>
            </ButtonPlans>
            
            
            
    </Container>
  )
}
