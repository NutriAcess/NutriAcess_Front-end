import React, { useState } from "react";

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

const SignInSpecialist: React.FC = () => {
  const [crn, setCRN] = useState("");
  const [senha, setSenha] = useState("");

  const handleChangeCRN = (value: string) => {
    setCRN(value);
  };

  const handleSenhaChange = (value: string) => {
    setSenha(value);
  };

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
            onChange={handleChangeCRN}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            label="Senha:"
            value={senha}
            placeholder="Digite sua senha"
            type="password"
            onChange={handleSenhaChange}
          />
        </InputWrapper>

        <ButtonWrapper>
          <Button title="Entrar" variant="primario" xs />
        </ButtonWrapper>

        <Text height={21} weight={400} size="16" color="vinho">
          Não tem cadastro? Faça agora mesmo!
        </Text>
      </Form>
    </Container>
  );
};

export default SignInSpecialist;
