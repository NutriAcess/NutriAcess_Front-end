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
  PhotoWithCalendar,
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
}

export const CardMarcarConsulta = ({
  image,
  nutricionist,
}: ICardMarcarConsulta) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <PhotoWithCalendar>
        <Infos>
          <Image>
            <img src={image.url} alt={image.alt}></img>
          </Image>
          <Text height={47} weight={700} color="branco" size="32">
            {nutricionist}
          </Text>

        </Infos>

        <ContentCalender>
          <CalendarBox/>

          <ButtonConfirm>
            <Button variant="secundario" title="Confirmar consulta" />
          </ButtonConfirm>
        </ContentCalender>
        </PhotoWithCalendar>
        <ButtonPlans
        onClick={() => navigate("/planos")}
      >
        <Button variant="primario" title="Veja nossos planos" />
      </ButtonPlans>
      </Content>
    </Container>
  );
};
