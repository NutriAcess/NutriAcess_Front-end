import React, { useState } from "react";

import {
  ButtonWrapper,
  Container,
  Form,
  Header,
  InputWrapper,
} from "./signInUser.styles";
import Logo from "../../components/logo/logo";
import { Text } from "../../components/text/text";
import { Input } from "../../components/input/input";
import Button from "../../components/button/button";

const SignInUser: React.FC = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleChangeEmail = (value: string) => {
    setEmail(value);
  };

  const handleSenhaChange = (value: string) => {
    setSenha(value);
  };

  return (
    <Container>
      <Header>
        <Logo />
      </Header>

      <Form>
        <Text height={21} weight={700} size="28" color="vinho">
          Login Usuário
        </Text>

        <InputWrapper>
          <Input
            label="Email"
            value={email}
            type="email"
            placeholder="Digite seu E-mail"
            onChange={handleChangeEmail}
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

export default SignInUser;
