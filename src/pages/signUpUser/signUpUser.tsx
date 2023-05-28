import React, { useState } from "react";

import {
  ButtonWrapper,
  Container,
  Form,
  InputWrapper,
} from "./signUpUser.styles";
import Logo from "../../components/logo/logo";
import { Text } from "../../components/text/text";
import { Input } from "../../components/input/input";
import Button from "../../components/button/button";

const SignUpUser: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");
  const [socialName, setSocialName] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  return (
    <Container>
      <Logo />

      <Form>
        <Text height={21} weight={700} size="28" color="vinho">
          Login Usuário
        </Text>

        <InputWrapper>
          <Input
            label="Nome"
            value={name}
            placeholder="Digite seu Nome"
            onChange={(e) => setName(e)}
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            label="Nome social"
            value={socialName}
            placeholder="Digite seu Nome social"
            onChange={(e) => setSocialName(e)}
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            label="Email"
            value={email}
            type="email"
            placeholder="Digite seu E-mail"
            onChange={(e) => setEmail(e)}
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

        <InputWrapper>
          <Input
            label="Confirme sua senha:"
            value={passwordConfirmation}
            placeholder="Confirme sua senha"
            type="password"
            onChange={(e) => setPasswordConfirmation(e)}
          />
        </InputWrapper>

        <ButtonWrapper>
          <Button title="Cadastrar" variant="primario" xs />
        </ButtonWrapper>

        <Text height={21} weight={400} size="16" color="vinho">
          Já é cadastrado? Faça login!
        </Text>
      </Form>
    </Container>
  );
};

export default SignUpUser;
