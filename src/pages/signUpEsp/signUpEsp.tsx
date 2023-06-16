import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import _ from "validator";
import Button from "../../components/button/button";
import { Input } from "../../components/input/input";
import Logo from "../../components/logo/logo";
import { Text } from "../../components/text/text";
import { TEsp } from "../../contexts/authContext/authContext.types";
import {
  ButtonWrapper,
  Container,
  Form,
  InputWrapper,
} from "./signUpEsp.styles";

const SignInSpecialist: React.FC = () => {
  const navigate = useNavigate();

  const [crn, setCRN] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome_completo, setNomeCompleto] = useState("");
  const [nome_social, setNomeSocial] = useState("");

  function validateFields() {
    if (
      _.isEmpty(nome_completo) ||
      _.isEmpty(email) ||
      _.isEmpty(senha) ||
      _.isEmpty(nome_social) ||
      _.isEmpty(crn)
    ) {
      return false;
    }

    if (!_.isNumeric(crn)) return false;
    if (!_.isAlphanumeric(senha)) return false;
    if (!_.isEmail(email)) return false;

    return true;
  }

  async function handleRegisterEsp() {
    const isValidated = validateFields();
    
    if (isValidated) {
      const esp: TEsp = {
        email,
        senha,
        nome_completo,
        nome_social,
        crn,
      };
      console.log(esp);
      try {
        const response = await axios.post(
          "http://localhost:3003/nutricionista/cadastrar", esp
        );

        const token = response.data.result;

        localStorage.setItem("token", token);

        navigate("/dashboard-nutri");
      } catch (error) {
        console.log(error);
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
          Cadastro Especialista
        </Text>

        <InputWrapper>
          <Input
            label="Nome:"
            value={nome_completo}
            placeholder="Digite seu nome"
            type="text"
            onChange={(value: string) => setNomeCompleto(value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            label="Nome Social:"
            value={nome_social}
            placeholder="Digite sua nome social"
            type="text"
            onChange={(value: string) => setNomeSocial(value)}
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            label="E-mail:"
            value={email}
            placeholder="Digite seu email"
            type="text"
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
            label="CRN:"
            value={crn}
            placeholder="Digite seu CRN"
            type="number"
            onChange={(value: string) => setCRN(value)}
          />
        </InputWrapper>

        <ButtonWrapper>
          <Button 
          xs
          title="Entrar" 
          variant="primario"
          onClick={() => handleRegisterEsp()}
          />
        </ButtonWrapper>

        <Text height={21} weight={400} size="16" color="vinho">
         Já é cadastrado? Faça login!
        </Text>
      </Form>
    </Container>
  );
};

export default SignInSpecialist;
