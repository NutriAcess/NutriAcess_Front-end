import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { UserFocus } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import QRCODE from "../../assets/QRCODE.png";
import Button from "../../components/button/button";
import Header from "../../components/header/header";
import { Input } from "../../components/input/input";
import { Modal } from "../../components/modal/modal";
import { PopUpPhoto } from "../../components/popupfotoperfil";
import { Text } from "../../components/text/text";
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
  const { user, isLogged } = useAuth();
  const navigate = useNavigate();

  const [ready, setReady] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [openPopupPhoto, setOpenPopupPhoto] = useState(false);

  const [name, setName] = useState(user.nome_completo);
  const [email, setEmail] = useState(user.email);
  const [senha, setSenha] = useState(user.senha);
  const [nome_social, setNome_social] = useState(user.nome_social);
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [sex, setSex] = useState("");
  const [plan, setPlan] = useState("");

  const params = useParams();
  const nutriInfos: any = params.nutri;
  const [nutri, setNutri] = useState<any>(null);

  const [changePhoto, setChangePhoto] = useState("")

  useEffect (() => {
    if (!isLogged) navigate("/sign-in-user")
    else setReady(true)
  }, [])

  // useEffect(() => {
  //   if (nutri===null) {
  //     let nutriData = data.find((el: any) => el.slug===nutriInfos);
  //     setNutri(nutriData);
  //   }
  // }, [nutri])

  return ready ? <Container>
      <Header />
      <Cover>
        <UserDetails>
          <Text color="branco" height={42} size="36" weight={500}>
            Dashboard - Olá {user.nome_social}!
          </Text>
          
          <UserWrapper>
            <User
              src="https://digimedia.web.ua.pt/wp-content/uploads/2017/05/default-user-image.png"
              alt="Foto do usuário"
            />
            <ButtonPhoto>
            <IconPhoto onClick={() => setOpenPopupPhoto(true)}>
              <UserFocus size="40" color="white"/>
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
      {/* {
        nutri!==null ? <SchedulingCard
          nutricionist={nutri.title}
          date={nutri.date}
          slug={nutri.slug}
        /> : <></>
      } */}
        <SchedulingCard data="Data e hora: 05/07/2023 - 13h" nome="Nutricionista: Camilla Gabriella"/>
        <SchedulingCardCompleted data="Data e hora: 31/10/2023 - 10h" nome="Nutricionista: Camilla Gabriella"/>
        <SchedulingCardCanceled data="Data e hora: 01/12/2020 - 9h" nome="Nutricionista: Larissa Alves"/>
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
            <Input label="Nome completo" onChange={(e) => setName(e)} value={name} />
            <Input
              label="Nome social"
              onChange={(e) => setNome_social(e)}
              value={nome_social}
            />
          </InputWrapper>
          <InputWrapper>
            <Input label="Email" onChange={(e) => setEmail(e)} value={email} />
            <Input
              label="Senha"
              onChange={(e) => setSenha(e)}
              value={senha}
              type="password"
            />
          </InputWrapper>
          <InputWrapper>
            <Input label="Idade" onChange={(e) => setAge(e)} value={age} />
            <Input label="Altura" onChange={(e) => setHeight(e)} value={age} />
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Altura"
              onChange={(e) => setHeight(e)}
              value={height}
            />
            <Input label="Peso" onChange={(e) => setWeight(e)} value={weight} />
          </InputWrapper>
          <InputWrapper>
            <Input label="Gênero" onChange={(e) => setSex(e)} value={sex} />
            <Input label="Objetivo" onChange={(e) => setSex(e)} value={sex} />
          </InputWrapper>
          <InputWrapper>
            <Input label="Nível de atividade física" onChange={(e) => setSex(e)} value={sex} />
            <Input label="Tem tempo para refeição" onChange={(e) => setSex(e)} value={sex} />
          </InputWrapper>
          <InputWrapper>
          <Input label="Alergia" onChange={(e) => setSex(e)} value={sex} />
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
                onClick={() => {}}
              />
            </ButtonPlan>
          </SectionPlan>

          <SectionDiet>
            <QrCode>
              <img src={QRCODE} alt="QR-CODE"></img>
            </QrCode>
            <ButtonDieta href="https://drive.google.com/file/d/1-E5ScDseLMthc-EDT5TI408-mAvLbps6/view?usp=sharing" target="_blank">
              <Button title="Acesse sua dieta" variant="primario"/>
            </ButtonDieta>
          </SectionDiet>
        </PlanWrapper>
      </Modal>
    </Container> : <></>
};
