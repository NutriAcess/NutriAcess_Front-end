import React, { useState } from "react";
import _ from "validator";

import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import { Input } from "../../components/input/input";
import Logo from "../../components/logo/logo";
import { Text } from "../../components/text/text";
import { TUser } from "../../contexts/authContext/authContext.types";
import { useAuth } from "../../hooks/useAuth";
import {
  ButtonWrapper,
  Container,
  DivCadastrar,
  DivLogo,
  Form,
  InputWrapper,
} from "./signUpUser.styles";

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

      navigate("/formulario");
    } else {
      alert("Campos incorretos");
    }
  }

  return (
    <Container>
      <DivLogo>
        <Logo />
      </DivLogo>

      <Form>
        <Text height={21} weight={700} size="28" color="vinho">
          Cadastro Usuário
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
        <DivCadastrar>
          <Text height={21} weight={400} size="16" color="vinho">
            Já é cadastrado? Faça login!
          </Text>
        </DivCadastrar>
      </Form>
    </Container>
  );
};

export default SignUpUser;
