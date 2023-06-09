import { UserFocus } from "@phosphor-icons/react";
import { useState } from "react";

import { Input } from "../../../../components/input/input";
import { Text } from "../../../../components/text/text";
import { Container, Photo, Section, TitleStap } from "./thirdStap.styles";

export const ThirdStap = () => {
  const [name, setName] = useState("");

  return (
    <Container>
      <TitleStap>
        <Text weight={600} height={16} size="20" color="vinho">
          Etapa 3
        </Text>
      </TitleStap>

      <TitleStap>
        <Text weight={600} height={21} size="20" color="vinho">
          Informações Pessoais
        </Text>
      </TitleStap>

      <Section>
        <TitleStap>
          <Text weight={600} height={20} size="18" color="preto">
            Foto de perfil
          </Text>
        </TitleStap>
        <Photo>
          <UserFocus size={80} />
        </Photo>
      </Section>

      <Section>
        <TitleStap>
          <Text weight={600} height={20} size="18" color="preto">
            Nome do usuário
          </Text>
        </TitleStap>

        <Input label="Nome:" onChange={(e) => setName(e)} value={name} />
      </Section>
    </Container>
  );
};
