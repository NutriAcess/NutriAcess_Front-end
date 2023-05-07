import { Text } from "../../../components/text/text";
import {
  Container,
  DescriptionUser,
  NameUser,
  PhotoUser,
} from "./cardFeedback.styles";

interface ICardFeedback {
  name: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
}

const CardFeedback = ({ name, description, image }: ICardFeedback) => {
  return (
    <Container>
      <PhotoUser>
        <img src={image.url} alt={image.alt}></img>
      </PhotoUser>
      <NameUser>
        <Text weight={600} height={1.7} color="preto" size="16">
          {name}
        </Text>
      </NameUser>
      <DescriptionUser>
        <Text weight={600} height={1.7} color="preto" size="8">
          {description}
        </Text>
      </DescriptionUser>
    </Container>
  );
};

export default CardFeedback;
