import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { UserFocus } from "@phosphor-icons/react";
import { ChangeEvent, useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { useNavigate, useParams } from "react-router-dom";
import QRCODE from "../../assets/QRCODE.png";
import Button from "../../components/button/button";
import Header from "../../components/header/header";
import { Input } from "../../components/input/input";
import { Modal } from "../../components/modal/modal";
import { PopUpPhoto } from "../../components/popupfotoperfil";
import { Text } from "../../components/text/text";
import { api } from "../../config/axios/axios";
import { useAuth } from "../../hooks/useAuth";
import { SchedulingCard } from "./components/schedulignCard/schedulingCard";
import { SchedulingCardCanceled } from "./components/schedulignCardCanceled/schedulingCardCanceled";
import { SchedulingCardCompleted } from "./components/schedulignCardCompleted/schedulingCardCompleted";
import { SchedulingPlan } from "./components/schedulignPlan/schedulingPlan";
import {
  ButtonAnmnese,
  ButtonContent,
  ButtonDieta,
  ButtonPhoto,
  ButtonPlan,
  ButtonWrapper,
  Container,
  Cover,
  Form,
  IconPhoto,
  Info,
  InputPlan,
  InputWrapper,
  PlanWrapper,
  QrCode,
  Scheduling,
  SchedulingCardsPlan,
  SchedulingCardsWrapper,
  SectionDiet,
  SectionPlan,
  TextWrapper,
  TitlePlan,
  User,
  UserDetails,
  UserWrapper
} from "./profile-user.styles";

export const ProfileUser = () => {
  const { user, isLogged, token } = useAuth();
  const navigate = useNavigate();

  const [ready, setReady] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [openPopupPhoto, setOpenPopupPhoto] = useState(false);

  const [profile, setProfile] = useState<any>({});
  const [name, setName] = useState(user.nome_completo);
  const [email, setEmail] = useState(user.email);
  const [nome_social, setNome_social] = useState(user.nome_social);
  const [plan, setPlan] = useState("");

  const params = useParams();
  const nutriInfos: any = params.nutri;
  const [nutri, setNutri] = useState<any>(null);

  const [changePhoto, setChangePhoto] = useState("")

  function onChange(name: string, value: string) {
    setProfile({...profile, [name]: value})
  }

  function onChangeTelefone(event: ChangeEvent<HTMLInputElement>) {
    const {name, value} = event.target;

    setProfile({...profile, [name]: value})
  }

  useEffect(() => {
    if (!isLogged) navigate("/sign-in-user")
    else setReady(true)

    api.get(`/cliente/${user.id_cliente}`, {
      headers: { Authorization: token }
    }).then(async (resp: any) => {
      console.log(resp.data.cliente)
      setProfile(resp.data.cliente)
    }).catch((error: any) => {
      console.log(error)
    })
  }, [])

  useEffect(() => {
  }, [profile])

  return ready ? <Container>
    <Header />
    <Cover>
      <UserDetails>
        <Text color="branco" height={42} size="36" weight={500}>
          Olá {user.nome_social}!
        </Text>

        <UserWrapper>
          <User
            src="https://digimedia.web.ua.pt/wp-content/uploads/2017/05/default-user-image.png"
            alt="Foto do usuário"
          />
          <ButtonPhoto>
            <IconPhoto onClick={() => setOpenPopupPhoto(true)}>
              <UserFocus size="40" color="white" />
            </IconPhoto>
            <PopUpPhoto
              open={openPopupPhoto}
              onClose={() => setOpenPopupPhoto(false)}
            />
          </ButtonPhoto>

          <Info>
            <TextWrapper>
              <Text color="branco" height={29} size="24" weight={500}>
                Meu perfil
              </Text>
            </TextWrapper>
            <Button
              onClick={() => setShowModal(true)}
              title="Visualizar perfil"
              variant="terciario"
            />
          </Info>
        </UserWrapper>
      </UserDetails>
    </Cover>

    <Scheduling>
      <Text color="branco" height={26} size="22" weight={500}>
        Histórico de Consultas
      </Text>
    </Scheduling>

    <SchedulingCardsWrapper>
      <SchedulingCard data="Data e hora: 05/07/2023 - 13h" nome="Nutricionista: Camilla Gabriella" />
      <SchedulingCardCompleted data="Data e hora: 31/10/2023 - 10h" nome="Nutricionista: Camilla Gabriella" />
      <SchedulingCardCanceled data="Data e hora: 01/12/2020 - 9h" nome="Nutricionista: Larissa Alves" />
    </SchedulingCardsWrapper>

    <TitlePlan>
      <Text color="vinho" height={52} size="36" weight={500}>
        Plano Família
      </Text>
      <Text color="vinho" height={30} size="20" weight={500}>
        Integrantes:
      </Text>
    </TitlePlan>

    <SchedulingCardsPlan>
      <SchedulingPlan />
    </SchedulingCardsPlan>

    <Modal
      isVisible={showModal}
      onClose={() => setShowModal(false)}
      title="Meu perfil"
    >
      <Form>
        <InputWrapper>
          <Input label="Nome completo" onChange={(e) => onChange("nome_completo", e)} value={profile.nome_completo} />
          <Input label="Nome social" onChange={(e) => onChange("nome_social", e)} value={profile.nome_social} />
        </InputWrapper>
        <InputWrapper>
          <Input label="Email" onChange={(e) => onChange("email", e)} value={profile.email} />
          
          <div className="sc-bmzYkS lptelR">
            <span className="sc-cPiKLX hPztJU">Telefone:</span>

            <InputMask
              className="sc-iHGNWf lcYYkN"
              mask={'(99) 99999-9999'}
              type="telefone"
              name="telefone"
              value={profile.telefone}
              onChange={onChangeTelefone}
              placeholder="(11) 99999-9999"
            />
          </div>
        </InputWrapper>
        <InputWrapper>
          <Input label="Idade" onChange={(e) => onChange("idade", e)} value={profile.idade} />
          <Input label="Altura" onChange={(e) => onChange("altura", e)} value={profile.altura} />
          <Input label="Gênero" onChange={(e) => onChange("genero", e)} value={profile.genero} />
        </InputWrapper>
        <InputWrapper>
          <Input label="Objetivo" onChange={(e) => onChange("objetivo", e)} value={profile.objetivo} />
          <Input label="Nível de atividade física" onChange={(e) => onChange("capacidade_fisica", e)} value={profile.capacidade_fisica} />
        </InputWrapper>
        <InputWrapper>
          <Input label="Tem tempo para refeição" onChange={(e) => onChange("tempo_preparo", e)} value={profile.tempo_preparo} />
          <Input label="Peso" onChange={(e) => onChange("peso", e)} value={profile.peso} />
        </InputWrapper>
        <InputWrapper>
          <Input label="Restrição alimentar" onChange={(e) => onChange("peso", e)} value={profile.restricao_alimentar} />
          <Input label="Alergia" onChange={(e) => onChange("alergia", e)} value={profile.alergia} />
        </InputWrapper>
      </Form>

      <ButtonContent>
        <ButtonAnmnese href="https://docs.google.com/forms/d/e/1FAIpQLSdwIepwNmgJOPqpRURn263Q3MPTTGYAiOhAlD-PCb0kOfahMQ/viewform" target="_blank">
          <Button
            xs
            title="Ficha de Anmnese"
            variant="primario"
            onClick={() => setShowModal(false)}
          />
        </ButtonAnmnese>
        <ButtonWrapper>
          <Button
            xs
            title="Editar"
            variant="secundario"
            onClick={() => setShowModal(false)}
          />
          <Button title="Salvar" variant="primario" xs />
        </ButtonWrapper>
      </ButtonContent>

      <PlanWrapper>
        <SectionPlan>
          <InputPlan>
            <Input
              label="Plano Contratado"
              onChange={(e) => setPlan(e)}
              value={plan}
            />
          </InputPlan>
          <ButtonPlan>
            <Button
              title="Adicione um plano"
              variant="primario"
              xs
              onClick={() => { }}
            />
          </ButtonPlan>
        </SectionPlan>

        <SectionDiet>
          <QrCode>
            <img src={QRCODE} alt="QR-CODE"></img>
          </QrCode>
          <ButtonDieta href="https://drive.google.com/file/d/1-E5ScDseLMthc-EDT5TI408-mAvLbps6/view?usp=sharing" target="_blank">
            <Button title="Acesse sua dieta" variant="primario" />
          </ButtonDieta>
        </SectionDiet>
      </PlanWrapper>
    </Modal>
  </Container> : <></>
};
