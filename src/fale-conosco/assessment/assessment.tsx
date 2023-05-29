import { useState } from "react";
import Button from "../../components/button/button";
import { Input } from "../../components/input/input";
import { Text } from "../../components/text/text";

import {
  ButtonDiv,
  Container,
  ContainerInput,
  DivInput,
  DivNumber,
  Feedback,
  Number,
  Title,
} from "./assessment.styled";

const Assessment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Container>
      <Title>
        <Text weight={600} height={36} color="preto" size="24">
          Sua avaliação é muito importante para nós!
        </Text>
      </Title>

      <Feedback>
        <DivNumber>
          <Number> 0 </Number>
        </DivNumber>
        <DivNumber>
          <Number> 1 </Number>
        </DivNumber>
        <DivNumber>
          <Number> 2 </Number>
        </DivNumber>
        <DivNumber>
          <Number> 3 </Number>
        </DivNumber>
        <DivNumber>
          <Number> 4 </Number>
        </DivNumber>
        <DivNumber>
          <Number> 5 </Number>
        </DivNumber>
        <DivNumber>
          <Number> 6 </Number>
        </DivNumber>
        <DivNumber>
          <Number> 7 </Number>
        </DivNumber>
        <DivNumber>
          <Number> 8 </Number>
        </DivNumber>
        <DivNumber>
          <Number> 9 </Number>
        </DivNumber>
        <DivNumber>
          <Number> 10 </Number>
        </DivNumber>
      </Feedback>

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
          />
        </DivInput>
      
          
          <ButtonDiv>
            <Button variant="primario" title="Enviar" xs/>
          </ButtonDiv>
        </ContainerInput>
    
    </Container>
  );
};

export default Assessment;
