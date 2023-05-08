import { Warning } from "@phosphor-icons/react";
import { Container, TextData, TitleData } from "./cardData.styles";

import { Text } from "../../../components/text/text";

interface ICardData {
  title: string;
  description: string;
}

const CardData = ({ title, description }: ICardData) => {
  return (
    <Container>
      <Warning size={32} color="#FFF" />
      <TitleData>
        <Text weight={600} height={1.2} color="branco" size={"20"}>
          {title}
        </Text>
      </TitleData>
      <TextData>
        <Text weight={300} height={1.7} color="branco" size={"16"}>
          {description}
        </Text>
      </TextData>
    </Container>
  );
};

export default CardData;
