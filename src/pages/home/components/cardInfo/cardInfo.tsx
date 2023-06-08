import { Text } from "../../../../components/text/text";

import {
  Container,
  ImageAbout,
  TextDescription,
  TextInfo,
  TextTitle,
} from "./cardInfo.styles";

interface IInfo {
  title: string;
  description: string;
  direction: "row" | "row-reverse" ;
  image: {
    url: string;
    alt: string;
  };
}

const Info = ({ title, image, direction, description }: IInfo) => {
  return (
    <Container direction={direction}>
      <TextInfo>
        <TextTitle>
          <Text weight={600} height={1.7} color="preto" size="28">
            {title}
          </Text>
        </TextTitle>

        <TextDescription>
          <Text weight={400} height={1.7} color="preto" size="16">
            {description}
          </Text>
        </TextDescription>
      </TextInfo>

      <ImageAbout>
        <img src={image.url} alt={image.alt}></img>
      </ImageAbout>
    </Container>
  );
};

export default Info;
