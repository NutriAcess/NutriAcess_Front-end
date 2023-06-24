import { InstagramLogo } from "@phosphor-icons/react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import fotolaranja from "../../../assets/laranja.png";
import fotomorango from "../../../assets/morango.png";
import { TextSocial } from "../../agendamentos/cardcomponent/infocomponent/infocomponent.styles";
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

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/button/button";
import { PopUpConsulta } from "../../../components/popupconsulta/popupconsulta";
import { Text } from "../../../components/text/text";
import CalendarBox from "../Calendar";

interface ICardMarcarConsulta {
  image: {
    url: string;
    alt: string;
  };
  nutricionist: string;
  socialmedia: string;
  slug: string;
}

export const CardMarcarConsulta = ({
  image,
  nutricionist,
  socialmedia,
  slug,
}: ICardMarcarConsulta) => {
  const navigate = useNavigate();
  const [openPopup, setOpenPopup] = useState(false);
  const [dateSel, setDateSel] = useState<any>(null);

  useEffect(() => {}, [openPopup])

  // Set Initial Date
  useEffect(() => {
    let currentDate = new Date();
    setDateSel({
			year: currentDate.getFullYear(),
			month: currentDate.getMonth()+1,
			day: currentDate.getDate()
		})
  }, [])

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
              <TextSocial>
                <InstagramLogo size={24} color="#FFF" />
                <Text weight={600} height={16} color="branco" size="16">
                  {socialmedia}
                </Text>
              </TextSocial>

            </Infos>

            <ContentCalender>
              <Text height={57} weight={700} color="branco" size="24"> Agende aqui sua consulta!</Text>
              <CalendarBox setDate={setDateSel} />

              <ButtonConfirm onClick={() => setOpenPopup(true)} >
                <Button variant="primario" title="Confirmar consulta" />
                {
                  openPopup && <PopUpConsulta
                    slug={slug}
                    date={dateSel}
                    onClose={() => setOpenPopup(false)}
                  />
                }
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
