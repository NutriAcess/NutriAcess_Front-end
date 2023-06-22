import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import fotolaranja from "../../../assets/laranja.png";
import fotomorango from "../../../assets/morango.png";
import {
  ButtonConfirm,
  ButtonPlans,
  Container,
  ContainerGLobal,
  Content,
  ContentCalender,
  DivFruit,
  DivPlan,
  Image,
  Infos,
  PhotoWithCalendar,
  TitlePlan,
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

  function handleConfirmConsulta() {
    alert("Consulta confirmada com sucesso! Você será redirecionado(a) para o pagamento.")
    navigate("/pagamento-nutri")
  }

  return (
    <ContainerGLobal>
      <DivFruit>
        <img src={fotolaranja} />
      </DivFruit>

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
              <Text height={57} weight={700} color="branco" size="24"> Agende aqui sua consulta!</Text>
              <CalendarBox />

              <ButtonConfirm onClick={() => handleConfirmConsulta()} >
                <Button variant="primario" title="Confirmar consulta" />
              </ButtonConfirm>
            </ContentCalender>
          </PhotoWithCalendar>
          <DivPlan>
            <TitlePlan>
              <Text height={57} weight={700} color="branco" size="24">Ainda não assinou um Plano?</Text>
            </TitlePlan>
            <ButtonPlans onClick={() => navigate("/planos")}>
              <Button variant="secundario" title="Veja nossos planos" />
            </ButtonPlans>
          </DivPlan>
        </Content>
      </Container>

      <DivFruit>
        <img src={fotomorango} />
      </DivFruit>
    </ContainerGLobal >
  );
};
