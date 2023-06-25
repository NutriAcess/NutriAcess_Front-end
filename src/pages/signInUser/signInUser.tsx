import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import { Input } from "../../components/input/input";
import Logo from "../../components/logo/logo";
import { Text } from "../../components/text/text";
import { signInUser } from "../../services/authService/authService";
import {
  ButtonWrapper,
  Container,
  Form,
  Header,
  InputWrapper,
  RedirectSignIn,
} from "./signInUser.styles";

const SignInUser: React.FC = () => {
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleSignUser() {
    try {
      const response = await signInUser({
        email, senha
      }, loginUser);

      if (response.form) {
        navigate("/profile-user");
      } else {
        navigate("/formulario");
      }
    } catch (error) {}
  }

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
            onChange={(e) => setEmail(e)}
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
          <Button
            title="Entrar"
            variant="primario"
            xs
            onClick={handleSignUser}
          />
        </ButtonWrapper>

        <RedirectSignIn>
        <Text height={21} weight={400} size="16" color="vinho">
          Não tem cadastro? <button onClick={() => navigate("/sign-up-user")}>Cadastre-se!</button>
        </Text>
        </RedirectSignIn>
      </Form>
    </Container>
  );
};

export default SignInUser;
