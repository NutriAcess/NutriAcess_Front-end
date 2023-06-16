import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import _ from "validator";
import Button from "../../components/button/button";
import { Input } from "../../components/input/input";
import Logo from "../../components/logo/logo";
import { Text } from "../../components/text/text";
import { TUser } from "../../contexts/authContext/authContext.types";
import {
  ButtonWrapper,
  Container,
  Form,
  InputWrapper,
} from "./signUpUser.styles";

const SignUpUser: React.FC = () => {
  
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome_completo, setNomeCompleto] = useState("");
  const [nome_social, setNomeSocial] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function validateFields() {
    if (
      _.isEmpty(nome_completo) ||
      _.isEmpty(email) ||
      _.isEmpty(senha) ||
      _.isEmpty(nome_social) ||
      _.isEmpty(passwordConfirmation)
    ) {
      return false;
    }

    if (!_.isEmail(email)) return false;

    if (!_.equals(senha, passwordConfirmation)) return false;

    return true;
  }

  async function handleRegisterUser() {
    const isValidated = validateFields();

    if (isValidated) {
      const user: TUser = {
        email,
        senha,
        nome_completo,
        nome_social,
      };
      console.log(user);
      try {
        const response = await axios.post(
          "http://localhost:3003/cliente/cadastrar",
          user
        );

        const token = response.data.result;

        localStorage.setItem("token", token);

        navigate("/profile-user");
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Campos incorretos");
    }
  }

  return (
    <Container>
      <Logo />

      <Form>
        <Text height={21} weight={700} size="28" color="vinho">
          Cadastro Usuário
        </Text>

        <InputWrapper>
          <Input
            label="Nome"
            value={nome_completo}
            placeholder="Digite seu Nome"
            onChange={(value: string) => setNomeCompleto(value)}
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            label="Nome social"
            value={nome_social}
            placeholder="Digite seu Nome social"
            onChange={(value: string) => setNomeSocial(value)}
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            label="Email"
            value={email}
            type="email"
            placeholder="Digite seu E-mail"
            onChange={(value: string) => setEmail(value)}
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            label="Senha:"
            value={senha}
            placeholder="Digite sua senha"
            type="password"
            onChange={(value: string) => setSenha(value)}
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            label="Confirme sua senha:"
            value={passwordConfirmation}
            placeholder="Confirme sua senha"
            type="password"
            onChange={(value: string) => setPasswordConfirmation(value)}
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
