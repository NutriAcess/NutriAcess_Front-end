import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import _ from "validator";
import Button from "../../components/button/button";
import { Input } from "../../components/input/input";
import Logo from "../../components/logo/logo";
import { Text } from "../../components/text/text";
import { TUser } from "../../contexts/authContext/authContext.types";
import { signUpUser } from "../../services/authService/authService";
import {
  ButtonWrapper,
  Container,
  Form,
  InputWrapper,
  RedirectSignIn,
} from "./signUpUser.styles";

const SignUpUser: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome_completo, setNomeCompleto] = useState("");
  const [nome_social, setNomeSocial] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [telefone, setTelefone] = useState("");

  function validateFields() {
    if (
      _.isEmpty(nome_completo) ||
      _.isEmpty(email) ||
      _.isEmpty(senha) ||
      _.isEmpty(nome_social) ||
      _.isEmpty(passwordConfirmation) ||
      _.isEmpty(telefone)
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
        telefone
      };

      try {
        await signUpUser(user);
        navigate("/sign-in-user");
      } catch (error) {
        alert("Não foi possível efetuar o login. Tente novamente!");
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

        <InputWrapper>
          <Input
            label="Telefone:"
            value={telefone}
            placeholder="Telefone:"
            type="telefone"
            onChange={(value: string) => setTelefone(value)}
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

      <RedirectSignIn>
        <Text height={21} weight={400} size="16" color="vinho">
          Já é cadastrado? Faça <button onClick={() => navigate("/sign-in-user")}>login!</button>
        </Text>
      </RedirectSignIn>
      </Form>
    </Container>
  );
};

export default SignUpUser;
