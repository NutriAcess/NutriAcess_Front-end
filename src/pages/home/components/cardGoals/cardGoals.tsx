import {
  Container,
  GoalsIcons,
  TextIcons,
  TitleIcons,
} from "./cardGoals.styles";
import { Text } from "../../../../components/text/text";

interface IGoalsIcons {
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
}

const CardGoals = ({ title, description, image }: IGoalsIcons) => {
  return (
    <Container>
      <GoalsIcons>
        <img src={image.url} alt={image.alt} />
      </GoalsIcons>
      <TitleIcons>
        <Text weight={600} height={30} color="laranja_destaque" size="24">
          {title}
        </Text>
      </TitleIcons>
      <TextIcons>
        <Text weight={300} height={19} color="preto" size="16">
          {description}
        </Text>
      </TextIcons>
    </Container>
  );
};

export default CardGoals;
