import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { ptBR } from "date-fns/locale";
import {
  Container,
  Cover,
  DatePicker,
  Scheduling,
  Info,
  TextWrapper,
  User,
  UserDetails,
  UserWrapper,
  DatePickerWrapper,
  CalendarWrapper,
  SchedulingCardsWrapper,
  ButtonWrapper,
  Form,
  InputWrapper,
  ButtonContent,
} from "./nutri-dashboard.styles";
import { mockRanges } from "./mock-ranges";
import Header from "../../components/header/header";
import { Text } from "../../components/text/text";
import Button from "../../components/button/button";
import { SchedulingCard } from "./components/schedulignCard/schedulingCard";
import { Modal } from "../../components/modal/modal";
import { useState } from "react";
import { Input } from "../../components/input/input";

export const NutriDashboard = () => {
  const [showModal, setShowModal] = useState(false);

  const [crn, setCRN] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [socialName, setSocialName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Container>
      <Header />
      <Cover>
        <UserDetails>
          <Text color="branco" height={42} size="36" weight={500}>
            Dashboard - olá John
          </Text>
          <UserWrapper>
            <User
              src="https://github.com/Luisjunior119.png"
              alt="Foto do usuário"
            />
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
        <DatePickerWrapper>
          <Text color="branco" height={26} size="22" weight={500}>
            Agendamentos
          </Text>
          <CalendarWrapper>
            <DatePicker
              weekdayDisplayFormat="EEEEEE"
              showDateDisplay={false}
              direction="horizontal"
              ranges={mockRanges}
              onChange={() => {}}
              locale={ptBR}
              months={3}
            />
          </CalendarWrapper>
        </DatePickerWrapper>
      </Scheduling>

      <SchedulingCardsWrapper>
        <SchedulingCard />
        <SchedulingCard />
        <SchedulingCard />
        <SchedulingCard />
      </SchedulingCardsWrapper>

      <Modal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        title="Meu perfil"
      >
        <Form>
          <InputWrapper>
            <Input label="Nome" onChange={(e) => setName(e)} value={name} />
            <Input
              label="Nome social"
              onChange={(e) => setSocialName(e)}
              value={socialName}
            />
          </InputWrapper>
          <InputWrapper>
            <Input label="Email" onChange={(e) => setEmail(e)} value={email} />
            <Input
              label="Senha"
              onChange={(e) => setPassword(e)}
              value={password}
              type="password"
            />
          </InputWrapper>
          <InputWrapper>
            <Input label="CRN" onChange={(e) => setCRN(e)} value={crn} />
            <Input
              label="Descrição"
              onChange={(e) => setDescription(e)}
              value={description}
            />
          </InputWrapper>
        </Form>
        <ButtonContent>
          <ButtonWrapper>
            <Button
              xs
              title="Cancelar"
              variant="secundario"
              onClick={() => setShowModal(false)}
            />
          </ButtonWrapper>
          <ButtonWrapper>
            <Button title="Salvar" variant="primario" xs />
          </ButtonWrapper>
        </ButtonContent>
      </Modal>
    </Container>
  );
};
