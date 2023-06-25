import { XCircle } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { submitForm } from "../../services/formService/formService";
import { FirstStap } from "./components/firstStap/firstStap";
import { SecondStap } from "./components/secondStap/secondStap";
import Step from "./components/step/step";
import {
  Box,
  ButtonStep,
  Container,
  Content,
  DivCircle,
  DivStep,
} from "./formulario.styles";

export const Formulario = () => {
  const { form, setForm } = useForm();
  const { user, token } = useAuth();

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
    await submitForm(form, token);
  }

  async function handleSubmit() {
    if (step !== 2) {
      setStep(step + 1);
    } else {
      await handleSubmitForm();
    }
  }

  useEffect(() => {
    setForm((prev): any => ({
      ...prev,
      id_cliente: user.id_cliente,
      nome: user.nome_completo
    }));
  }, [])

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
