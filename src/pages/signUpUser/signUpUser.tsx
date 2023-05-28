import React, { useState } from "react";

import Logo from "../assets/logo.svg";

import { Config, Container, Texto1, Texto2 } from "./signUpUser.styles";
import { Text } from "../../components/text/text";
import { Input } from "../../components/input/input";

const Singin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [nomesocial, setNomesocial] = useState("");
  const [crn, setCrn] = useState("");

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handleSenhaChange = (value: string) => {
    setSenha(value);
  };

  const handleNomeChange = (value: string) => {
    setNome(value);
  };

  const handleNomesocialChange = (value: string) => {
    setNomesocial(value);
  };

  const handleCrnChange = (value: string) => {
    setCrn(value);
  };

  return (
    <Container>
      <Logo></Logo>

      <Texto1>
        <Text height={1.7} weight={600} size="28" color="vinho">
          Cadastro Especialista
        </Text>
      </Texto1>

      <Input
        label="Nome:"
        value={nome}
        placeholder="Nome"
        type="text"
        onChange={handleNomeChange}
      />
      <Config>
        <Input
          label="Nome Social"
          value={nomesocial}
          placeholder="Nome social"
          type="text"
          onChange={handleNomesocialChange}
        />
      </Config>
      <Input
        label="E-mail:"
        value={email}
        placeholder=" e-mail"
        type="email"
        onChange={handleEmailChange}
      />
      <Input
        label="Senha:"
        value={senha}
        placeholder=" senha"
        type="password"
        onChange={handleSenhaChange}
      />
      <Input
        label="CRN:"
        value={crn}
        placeholder="0000000-0"
        type="number"
        onChange={handleCrnChange}
      />

      <Texto2>
        <Text height={1.7} weight={600} size="16" color="vinho">
          Não tem cadastro? Faça agora mesmo!
        </Text>
      </Texto2>
    </Container>
  );
};

export default Singin;
