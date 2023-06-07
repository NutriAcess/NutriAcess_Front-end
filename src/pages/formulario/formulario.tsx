import { useState } from "react";
import Button from "../../components/button/button";
import { FirstStap } from "./components/firstStap/firstStap";
import { Box, ButtonStep, Container, Content } from "./formulario.styles";
import { SecondStap } from "./secondStap/secondStap";
import Step from "./step/step";
import { ThirdStap } from "./thirdStap/thirdStap";

export const Formulario = () => {
  const [step, setStep] = useState(1);
  const Steps = [1, 2, 3];

  const getCompStep = () => {
    switch (step) {
      case 1:
        return <FirstStap />;
      case 2:
        return <SecondStap />;
      case 3:
        return <ThirdStap />;
      default:
        return <FirstStap />;
    }
  };

  return (
    <Container>
      <Content>
        {Steps.map((item) => (
          <Step key={item} index={item} active={step === item} />
        ))}
      </Content>
      
      <Box>
      {getCompStep()}
      </Box>
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
  )
}
