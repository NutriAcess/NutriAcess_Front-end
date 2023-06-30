import React, { ChangeEvent, useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { useNavigate } from "react-router-dom";
import _ from "validator";
import Button from "../../components/button/button";
import { Input } from "../../components/input/input";
import Logo from "../../components/logo/logo";
import { Text } from "../../components/text/text";
import { TUser } from "../../contexts/authContext/authContext.types";
import { signUpUser } from "../../services/authService/authService";
import './styles.css';

import {
  ButtonWrapper,
  Container,
  Form,
  InputWrapper,
  RedirectSignIn,
} from "./signUpUser.styles";

interface Errors {
  nome_completo?: string;
  email?: string;
  senha?: string;
  passwordConfirmation?: string;
  nome_social?: string;
  telefone?: string;
}

const SignUpUser: React.FC = () => {
  const navigate = useNavigate();

  const [errors, setErrors] = useState<Errors|null>(null);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome_completo, setNomeCompleto] = useState("");
  const [nome_social, setNomeSocial] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [telefone, setTelefone] = useState("");

  function validateFields() {
    let errorsArr: any = null;
    if (_.isEmpty(nome_completo)) errorsArr = {...errorsArr, nome_completo: "Nome não pode estar vazio"}
    if (_.isEmpty(email)) errorsArr = {...errorsArr, email: "Email não pode estar vazio"}
    if (_.isEmpty(senha)) errorsArr = {...errorsArr, senha: "Senha está vazia"}
    if (_.isEmpty(passwordConfirmation)) errorsArr = {...errorsArr, passwordConfirmation: "Confirmação de Senha está vazia"}
    if (_.isEmpty(nome_social)) errorsArr = {...errorsArr, nome_social: "Nome Social não pode estar vazio"}
    if (_.isEmpty(telefone.replace(/\_| |\(|\)|\-/gm, ''))) errorsArr = {...errorsArr, telefone: "Telefone não pode estar vazio"}
    if (!_.isEmail(email)) errorsArr = {...errorsArr, email: "Email inválido"}
    if (!_.equals(senha, passwordConfirmation)) errorsArr = {...errorsArr, senha: "Senha não coincidem"}

    setErrors(errorsArr)
    return errorsArr;
  }

  async function handleRegisterUser() {
    const isValidated = validateFields();

    if (isValidated===null) {
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
        console.log("Não foi possível efetuar o login. Tente novamente!");
      }
    }
  }

  function onChangeTelefone(event: ChangeEvent<HTMLInputElement>) {
    const {value} = event.target;
    setTelefone(value.replace(/\_| |\(|\)|\-/gm, ''));
    setErrors({...errors, telefone: ''});
  }

  useEffect(() => {}, [errors, telefone])

  return (
    <Container>
      <Logo />

      <Form>
        <Text height={21} weight={700} size="28" color="vinho">
          Cadastro Usuário
        </Text>

        <InputWrapper>
          <Input
            label="Nome Completo"
            value={nome_completo}
            placeholder="Digite seu Nome Completo"
            className={errors && errors.nome_completo ? 'error' : ''}
            onChange={(value: string) => {setNomeCompleto(value); setErrors({...errors, nome_completo: ''})}}
          />
          {errors && errors.nome_completo!=='' ? <small>{errors.nome_completo}</small> : <></>}
        </InputWrapper>

        <InputWrapper>
          <Input
            label="Nome social"
            value={nome_social}
            placeholder="Digite seu Nome social"
            className={errors && errors.nome_social ? 'error' : ''}
            onChange={(value: string) => {setNomeSocial(value); setErrors({...errors, nome_social: ''})}}
          />
          {errors && errors.nome_social!=='' ? <small>{errors.nome_social}</small> : <></>}
        </InputWrapper>

        <InputWrapper>
          <Input
            label="Email"
            value={email}
            type="email"
            placeholder="exemplo@gmail.com"
            className={errors && errors.email ? 'error' : ''}
            onChange={(value: string) => {setEmail(value); setErrors({...errors, email: ''})}}
          />
          {errors && errors.email!=='' ? <small>{errors.email}</small> : <></>}
        </InputWrapper>

        <InputWrapper>
          <Input
            label="Senha:"
            value={senha}
            placeholder="Digite sua senha"
            className={errors && errors.senha ? 'error' : ''}
            type="password"
            onChange={(value: string) => {setSenha(value); setErrors({...errors, senha: ''})}}
          />
          {errors && errors.senha!=='' ? <small>{errors.senha}</small> : <></>}
        </InputWrapper>

        <InputWrapper>
          <Input
            label="Confirme sua senha:"
            value={passwordConfirmation}
            placeholder="Confirme sua senha"
            className={errors && errors.senha ? 'error' : ''}
            type="password"
            onChange={(value: string) => {setPasswordConfirmation(value); setErrors({...errors, passwordConfirmation: ''})}}
          />
          {errors && errors.passwordConfirmation!=='' ? <small>{errors.passwordConfirmation}</small> : <></>}
        </InputWrapper>

        <InputWrapper>
          <div className="sc-cWSHoV eaUxtj">
            <span className="sc-cPiKLX fvwJdb">Telefone:</span>

            <InputMask
              className={"sc-eBMEME cfnsRj" + (errors && errors.telefone ? ' error' : '')}
              mask={'(99) 99999-9999'}
              type="telefone"
              value={telefone}
              onChange={onChangeTelefone}
              placeholder="(11) 99999-9999"
            />
          </div>

          {errors && errors.telefone!=='' ? <small>{errors.telefone}</small> : <></>}
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
