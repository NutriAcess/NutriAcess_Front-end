import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import { Input } from "../../components/input/input";
import Logo from "../../components/logo/logo";
import { Text } from "../../components/text/text";
import { useAuth } from "../../hooks/useAuth";
import { signInEsp } from "../../services/authService/authService";
import {
  ButtonWrapper,
  Container,
  Form,
  InputWrapper,
} from "./signInEsp.styles";

const SignInSpecialist: React.FC = () => {
  const navigate = useNavigate();
  const { loginEsp } = useAuth();

  const [crn, setCrn] = useState("");
  const [senha, setSenha] = useState("");

  async function handleSignEsp() {
    try {
      await signInEsp({
        crn,
        senha,
      }, loginEsp);

        navigate("/dashboard-nutri");
     
    } catch (error) {}
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
            value={senha}
            placeholder="Digite sua senha"
            type="password"
            onChange={(e) => setSenha(e)}
          />
        </InputWrapper>

        <ButtonWrapper>
          <Button title="Entrar" variant="primario" xs onClick={handleSignEsp}/>
        </ButtonWrapper>

      </Form>
    </Container>
  );
};

export default SignInSpecialist;
