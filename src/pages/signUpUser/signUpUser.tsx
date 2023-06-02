import React, { useState } from "react";
import _ from "validator";

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
import { TUser } from "../../contexts/authContext/authContext.types";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const SignUpUser: React.FC = () => {
  const { signUpUser } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");
  const [socialName, setSocialName] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function validateFields() {
    if (
      _.isEmpty(name) ||
      _.isEmpty(email) ||
      _.isEmpty(password) ||
      _.isEmpty(socialName) ||
      _.isEmpty(passwordConfirmation)
    ) {
      return false;
    }

    if (!_.isEmail(email)) return false;

    if (!_.equals(password, passwordConfirmation)) return false;

    return true;
  }

  function handleRegisterUser() {
    const isValidated = validateFields();

    if (isValidated) {
      const user: TUser = {
        email,
        name,
        password,
        socialName,
      };

      signUpUser(user);

      navigate("/profile-user");
    } else {
      alert("Campos incorretos");
    }
  }

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
          <Button
            xs
            title="Cadastrar"
            variant="primario"
            onClick={() => handleRegisterUser()}
          />
        </ButtonWrapper>

        <Text height={21} weight={400} size="16" color="vinho">
          Já é cadastrado? Faça login!
        </Text>
      </Form>
    </Container>
  );
};

export default SignUpUser;
