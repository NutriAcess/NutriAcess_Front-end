import { InstagramLogo } from "phosphor-react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {
  ButtonConfirm,
  ButtonPlans,
  Container,
  Content,
  ContentCalender,
  Image,
  Infos,
  SocialMedia
} from "./CardMarcarConsulta.styles";

import { useNavigate } from "react-router-dom";
import Button from "../../../components/button/button";
import { Text } from "../../../components/text/text";
import CalendarBox from "../Calendar";

interface ICardMarcarConsulta {
  image: {
    url: string;
    alt: string;
  };
  nutricionist: string;
  socialMedia: string;
}

export const CardMarcarConsulta = ({
  image,
  nutricionist,
  socialMedia,
}: ICardMarcarConsulta) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Infos>
          <Image>
            <img src={image.url} alt={image.alt}></img>
          </Image>
          <Text height={47} weight={700} color="branco" size="32">
            {nutricionist}
          </Text>
          <SocialMedia>
            <InstagramLogo color="#731943" size="24" />
            <Text height={16} weight={400} color="branco" size="18">
              {socialMedia}
            </Text>
          </SocialMedia>
        </Infos>

        <ContentCalender>
          {/* <CalendarWrapper>
            <DatePicker
              weekdayDisplayFormat="EEEEEE"
              showDateDisplay={false}
              direction="horizontal"
              onChange={() => {}}
              locale={ptBR}
              months={1}
            />
          </CalendarWrapper> */}
          <CalendarBox/>

          <ButtonConfirm>
            <Button variant="primario" title="Confirmar consulta" />
          </ButtonConfirm>
        </ContentCalender>
      </Content>

      <ButtonPlans
        onClick={() => navigate("/planos")}
      >
        <Button variant="primario" title="Veja nossos planos" />
      </ButtonPlans>
    </Container>
  );
};
