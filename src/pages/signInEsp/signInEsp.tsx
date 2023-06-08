import React, { useState } from "react";
import _ from "validator";

import {
  ButtonWrapper,
  Container,
  Form,
  InputWrapper,
} from "./signInEsp.styles";
import Logo from "../../components/logo/logo";
import { Text } from "../../components/text/text";
import { Input } from "../../components/input/input";
import Button from "../../components/button/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { TEsp } from "../../contexts/authContext/authContext.types";

const SignInSpecialist: React.FC = () => {
  const { signInEsp } = useAuth();
  const navigate = useNavigate();

  const [crn, setCrn] = useState("");
  const [password, setPassword] = useState("");

  function validateFields() {
    if (
      _.isEmpty(crn) ||
      _.isEmpty(password)
    ) {
      return false;
    }

    if (!_.isNumeric(crn)) return false;
    if (!_.isAlphanumeric(password)) return false;

    return true;
  }

  function handleLoginEsp() {
    const isValidated = validateFields();

    if (isValidated) {
      const useresp: TEsp = {
        crn,
        password,
      };

      signInEsp(useresp);

      navigate("/dashboard-nutri");
    } else {
      alert("Campos incorretos");
    }
  }
  
  return (
    <Container>
      <Logo />

      <Form>
        <Text height={21} weight={700} size="28" color="vinho">
          Login Especialista
        </Text>

        <InputWrapper>
          <Input
            label="CRN:"
            value={crn}
            placeholder="Digite seu CRN"
            onChange={(e) => setCrn(e)}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            label="Senha:"
            value={password}
            placeholder="Digite sua senha"
            type="password"
            onChange={(e) => setPassword(e)}
          />
        </InputWrapper>

        <ButtonWrapper>
          <Button title="Entrar" variant="primario" xs onClick={() => handleLoginEsp()} />
        </ButtonWrapper>

        <Text height={21} weight={400} size="16" color="vinho">
          Não tem cadastro? Faça agora mesmo!
        </Text>
      </Form>
    </Container>
  );
};

export default SignInSpecialist;
