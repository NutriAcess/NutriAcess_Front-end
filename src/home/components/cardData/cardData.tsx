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
      <Warning color="#FFF" />
      <TitleData>
        <Text weight={600} height={1.2} color="branco" size={"8"}>
          {title}
        </Text>
      </TitleData>
      <TextData>
        <Text weight={600} height={1.2} color="branco" size={"8"}>
          {description}
        </Text>
      </TextData>
    </Container>
  );
};

export default CardData;
