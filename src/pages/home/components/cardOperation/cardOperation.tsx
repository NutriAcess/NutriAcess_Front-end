import { CaretDoubleRight, CaretDoubleLeft } from "@phosphor-icons/react";
import {
  Container,
  Icon,
  ImageOperation,
  TextDescription,
  TextOperation,
  TitleOperation,
} from "./cardOperation.styles";
import { Text } from "../../../../components/text/text";

interface ICardOperation {
  number_title: string;
  title: string;
  description: string;
  direction: "row" | "row-reverse";
  icon: boolean;
  image: {
    url: string;
    alt: string;
  };
}

const CardOperation = ({
  number_title,
  title,
  description,
  direction,
  image,
  icon,
}: ICardOperation) => {
  return (
    <Container direction={direction}>
      <Icon icon={icon}>
        {icon ? <CaretDoubleRight size="50" /> : <CaretDoubleLeft size="50" />}
      </Icon>
      <TextOperation>
        <TitleOperation>
          <Text weight={700} height={42} color="laranja_destaque" size="24">
            {number_title}
          </Text>
        </TitleOperation>
        <TitleOperation>
          <Text weight={700} height={42} color="laranja_destaque" size="24">
            {title}
          </Text>
        </TitleOperation>

        <TextDescription>
          <Text weight={300} height={24} color="preto" size="16">
            {description}
          </Text>
        </TextDescription>
      </TextOperation>

      <ImageOperation>
        <img src={image.url} alt={image.alt}></img>
      </ImageOperation>
    </Container>
  );
};

export default CardOperation;
