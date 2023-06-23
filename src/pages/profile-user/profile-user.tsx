import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { UserFocus } from "@phosphor-icons/react";
import { useState } from "react";
import QRCODE from "../../assets/QRCODE.png";
import Button from "../../components/button/button";
import Header from "../../components/header/header";
import { Input } from "../../components/input/input";
import { Modal } from "../../components/modal/modal";
import { PopUpPhoto } from "../../components/popupfotoperfil";
import { Text } from "../../components/text/text";
import { useAuth } from "../../hooks/useAuth";
import { SchedulingCard } from "../profile-user/components/schedulignCard/schedulingCard";
import { SchedulingPlan } from "./components/schedulignPlan/schedulingPlan";
import {
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
  const { user } = useAuth();

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

  const [changePhoto, setChangePhoto] = useState("")

  return (
    <Container>
      <Header />
      <Cover>
        <UserDetails>
          <Text color="branco" height={42} size="36" weight={500}>
            Dashboard - olá {user.nome_social}
          </Text>
          
          <UserWrapper>
            <User
              src="https://github.com/Luisjunior119.png"
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
        <SchedulingCard />
        <SchedulingCard />
        <SchedulingCard />
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
          <ButtonWrapper>
            <Button
              xs
              title="Editar"
              variant="secundario"
              onClick={() => setShowModal(false)}
            />
          </ButtonWrapper>
          <ButtonWrapper>
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
    </Container>
  );
};
