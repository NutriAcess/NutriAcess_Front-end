import { InstagramLogo } from "@phosphor-icons/react";
import { Text } from "../../../../components/text/text";
import {
  Container,
  DescriptionDoctor,
  ImageDoctor,
  InfoSection,
  TextSocial,
  TextTitle,
  ButtonDoctor,
} from "./infocomponent.styles";
import Button from "../../../../components/button/button";

/* Criação de uma interface chamada IInfoComponent para a criação do card dos nutricionistas*/
interface IInfoComponent {
  title: string;
  socialmedia: string;
  description: string;
  verify: {
    url: string;
    alt: string;
  };
  image: {
    url: string;
    alt: string;
  };
}
/* Passei as props abaixo*/

const InfoComponent = ({
  title,
  socialmedia,
  description,
  image,
  verify,
}: IInfoComponent) => {
  return (
    <Container>
      <ImageDoctor>
        <img src={image.url} alt={image.alt}></img>
      </ImageDoctor>

      <InfoSection>
        <TextTitle>
          <Text weight={600} height={47} color="preto" size="32">
            {title}
          </Text>
          <img src={verify.url} alt={verify.alt} />
        </TextTitle>

        <TextSocial>
          <InstagramLogo size={28} />
          <Text weight={600} height={16} color="preto" size="16">
            {socialmedia}
          </Text>
        </TextSocial>

        <DescriptionDoctor>
          <Text weight={400} height={16} color="preto" size="16">
            {description}
          </Text>
        </DescriptionDoctor>

        <ButtonDoctor>
          <Button title="Marcar consulta" variant="primario" />
        </ButtonDoctor>
      </InfoSection>
    </Container>
  );
};

export default InfoComponent;
