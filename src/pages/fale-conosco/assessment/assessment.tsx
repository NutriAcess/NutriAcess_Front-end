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

const Assessment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const novoArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [showInfoEvaluation, setShowInfoEvaluation] = useState(false);

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
        {novoArray.map((num) => (
          <DivNumber>
            <Number >
              {num}
            </Number>
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
                value={name}
                onChange={(e) => setName(e)}
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
                value={description}
                onChange={(e) => setDescription(e)}
                height="100"
              />
            </DivInput>

            <ButtonDiv>
              <Button variant="primario" title="Enviar" xs />
            </ButtonDiv>
          </ContainerInput>
        </>
      )}
    </Container>
  );
};

export default Assessment;
