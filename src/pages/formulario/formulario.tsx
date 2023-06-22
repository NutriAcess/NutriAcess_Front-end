import { useState } from "react";
import Button from "../../components/button/button";
import { FirstStap } from "./components/firstStap/firstStap";
import {
  Box,
  ButtonStep,
  Container,
  Content,
  DivCircle,
  DivStep,
} from "./formulario.styles";
import { SecondStap } from "./components/secondStap/secondStap";
import Step from "./components/step/step";
import { XCircle } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { AvatarsEnum } from "../../services/authService/authService.types";
import { submitForm } from "../../services/formService/formService";

export const Formulario = () => {
  const { form, setForm } = useForm();

  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const Steps = [1, 2];

  const getCompStep = () => {
    switch (step) {
      case 1:
        return <FirstStap />;
      default:
        return <SecondStap />;
    }
  };

  async function handleSubmitForm() {
    await submitForm(form);
  }

  async function handleSubmit() {
    if (step !== 2) {
      setStep(step + 1);
    } else {
      await handleSubmitForm();
    }
  }

  return (
    <Container>
      <Content>
        <DivStep>
          {Steps.map((item) => (
            <Step key={item} index={item} active={step === item} />
          ))}
        </DivStep>
        <DivCircle onClick={() => navigate("/profile-user")}>
          <XCircle size={32} color="#000000" />
        </DivCircle>
      </Content>

      <Box>{getCompStep()}</Box>
      <ButtonStep>
        <Button
          title="Voltar"
          variant="primario"
          disable={step === 1}
          onClick={() => setStep(step - 1)}
        />
        <Button
          title={step === 2 ? "Enviar" : "Próximo"}
          variant="primario"
          onClick={() => handleSubmit()}
        />
      </ButtonStep>
    </Container>
  );
};
