import { useState } from "react";
import Button from "../../../components/button/button";
import { Input } from "../../../components/input/input";
import { Text } from "../../../components/text/text";

import {
  ButtonDiv,
  Container,
  ContainerInput,
  DivInput,
  DivNumber,
  Feedback,
  Number,
  Title,
} from "./assessment.styles";
import { submitForm } from "../../../services/formService/formService";
import { AVALIACAO, FaleConosco } from "../../../services/authService/authService.types";
import { submitFormFale } from "../../../services/FaleService/FaleService";

const Assessment = () => {
  const [nome_usuario, setNomeUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [showInfoEvaluation, setShowInfoEvaluation] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const avaliacoes = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const handleFormSubmit = async () => {
    console.log(selectedNumber);
    if (selectedNumber === null) {
      console.error("Por favor, selecione um número na avaliação.");
      return;
    }
  
    const formFale: FaleConosco = {
      avaliacao: selectedNumber.toString() as AVALIACAO,
      nome_usuario,
      email,
      mensagem,
    };
  
    try {
      const response = await submitFormFale(formFale);
      console.log(response);
  
      // Limpe os campos do formulário
      setNomeUsuario("");
      setEmail("");
      setMensagem("");
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    }
  };
  
  return (
    <Container>
      <Title>
        <Text weight={600} height={36} color="preto" size="24">
          Sua avaliação é muito importante para nós!
        </Text>
        <Text weight={600} height={36} color="preto" size="18">
          Avalie nosso site abaixo:
        </Text>
      </Title>
      <Feedback onClick={() => setShowInfoEvaluation(!showInfoEvaluation)}>
      {avaliacoes.map((num) => (
        <DivNumber>
          <Number onClick={() => setSelectedNumber(parseInt(num))}>{num}</Number>
        </DivNumber>
      ))}
    </Feedback>
      {showInfoEvaluation && (
        <>
          <Title>
            <Text weight={600} height={36} color="preto" size="24">
              Como podemos te ajudar?
            </Text>
          </Title>

          <ContainerInput>
            <DivInput>
              <Input
                label="Nome"
                placeholder="Digite seu nome..."
                value={nome_usuario}
                onChange={(e) => setNomeUsuario(e)}
              />
            </DivInput>

            <DivInput>
              <Input
                label="Email"
                placeholder="Digite seu email..."
                value={email}
                onChange={(e) => setEmail(e)}
              />
            </DivInput>

            <DivInput>
              <Input
                label="Mensagem"
                placeholder="Digite sua mensagem..."
                value={mensagem}
                onChange={(e) => setMensagem(e)}
                height="100"
              />
            </DivInput>

            <ButtonDiv>
              <Button onClick={handleFormSubmit}variant="primario" title="Enviar" xs />
            </ButtonDiv>
          </ContainerInput>
        </>
      )}
    </Container>
  );
};

export default Assessment;
