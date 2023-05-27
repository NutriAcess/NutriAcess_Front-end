import { Warning } from "@phosphor-icons/react";
import { Container, TitleData } from "./cardData.styles";

import { Text } from "../../../components/text/text";
import { useState } from "react";
import { theme } from "../../../global/theme";

interface ICardData {
  title: string;
  description: string;
}

const CardData = ({ title, description }: ICardData) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Container
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Warning
        size={32}
        color={isHover ? theme.Colors.preto : theme.Colors.branco}
        style={{
          transition: "0.8s",
        }}
      />
      <TitleData>
        <Text
          weight={600}
          height={1.2}
          color={isHover ? "preto" : "branco"}
          size={"20"}
          transitionTiming={0.8}
        >
          {title}
        </Text>
      </TitleData>
      <Text
        weight={300}
        height={1.7}
        color={isHover ? "preto" : "branco"}
        size={"16"}
        transitionTiming={0.8}
      >
        {description}
      </Text>
    </Container>
  );
};

export default CardData;
