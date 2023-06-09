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
import { ThirdStap } from "./components/thirdStap/thirdStap";
import { XCircle } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

export const Formulario = () => {
  const [step, setStep] = useState(1);
  const Steps = [1, 2, 3];
  const navigate = useNavigate();

  const getCompStep = () => {
    switch (step) {
      case 1:
        return <FirstStap />;
      case 2:
        return <SecondStap />;
      default:
        return <ThirdStap />;
    }
  };

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
          title={step === 3 ? "Enviar" : "Próximo"}
          variant="primario"
          onClick={() => step !== 3 && setStep(step + 1)}
        />
      </ButtonStep>
    </Container>
  );
};
