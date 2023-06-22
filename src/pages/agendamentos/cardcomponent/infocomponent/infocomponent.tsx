import { InstagramLogo } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/button/button";
import { Text } from "../../../../components/text/text";
import {
  ButtonDoctor,
  Container,
  DescriptionDoctor,
  ImageDoctor,
  InfoSection,
  StyledImage,
  TextSocial,
} from "./infocomponent.styles";

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

const InfoComponent = ({
  title,
  socialmedia,
  description,
  image,
  verify,
}: IInfoComponent) => {
  const navigate = useNavigate();

  return (
    <Container>
      <ImageDoctor>
        <StyledImage src={image.url} alt={image.alt} />
      </ImageDoctor>

      <InfoSection>
        <Text weight={600} height={47} color="preto" size="32">
          {title}
        </Text>

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
          <Button title="Marcar consulta" variant="primario" onClick={() => navigate("/marcar-consulta")}/>
        </ButtonDoctor>
      </InfoSection>
    </Container>
  );
};

export default InfoComponent;

