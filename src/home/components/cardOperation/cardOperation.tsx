import { CaretDoubleRight } from "@phosphor-icons/react";
import {
  Container,
  ImageOperation,
  TextOperation,
  TitleOperation,
} from "./cardOperation.styles";
import { Text } from "../../../components/text/text";

interface ICardOperation {
  title: string;
  description: string;
  direction: "row" | "row-reverse";
  image: {
    url: string;
    alt: string;
  };
}

const CardOperation = ({
  title,
  description,
  direction,
  image,
}: ICardOperation) => {
  return (
    <Container direction={direction}>
      <CaretDoubleRight color="#FCD823" />
      <TextOperation>
        <TitleOperation>
          <Text weight={600} height={1.7} color="preto" size="24">
            {title}
          </Text>
        </TitleOperation>

        <Text weight={600} height={1.7} color="preto" size="16">
          {description}
        </Text>
      </TextOperation>

      <ImageOperation>
        <img src={image.url} alt={image.alt}></img>
      </ImageOperation>
    </Container>
  );
};

export default CardOperation;
