import React, { useState } from "react";

import { Container, Texto1, Texto2 } from "./signInEsp.styles";
import Logo from "../../components/logo/logo";
import { Text } from "../../components/text/text";
import { Input } from "../../components/input/input";

const Singin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handleSenhaChange = (value: string) => {
    setSenha(value);
  };

  return (
    <Container>
      <Logo />
      <Texto1>
        <Text height={21} weight={700} size="28" color="vinho">
          Login Especialista
        </Text>
      </Texto1>

      <Input
        label="E-mail:"
        value={email}
        placeholder="Digite seu e-mail"
        type="email"
        onChange={handleEmailChange}
      />
      <Input
        label="Senha:"
        value={senha}
        placeholder="Digite sua senha"
        type="password"
        onChange={handleSenhaChange}
      />

      <Texto2>
        <Text height={21} weight={700} size="16" color="vinho">
          Não tem cadastro? Faça agora mesmo!
        </Text>
      </Texto2>
    </Container>
  );
};

export default Singin;
