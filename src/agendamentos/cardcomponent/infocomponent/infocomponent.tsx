import { InstagramLogo } from "@phosphor-icons/react";
import { Text } from "../../../components/text/text";
import { Container, DescriptionDoctor, ImageDoctor, InfoSection, TextSocial, TextTitle, ButtonDoctor } from "./infocomponent.styles";
import Button from "../../../components/button/button";


interface IInfoComponent {
  title: string;
  socialmedia: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
}
const InfoComponent = ({title, socialmedia, description, image}: IInfoComponent) => {
  return (
    <Container>
      <ImageDoctor>
        <img src={image.url} alt={image.alt}></img>
      </ImageDoctor>

      <InfoSection>

      <TextTitle>
        <Text weight={600} height={1.7} color="vinho" size="32">
          {title}
        </Text>
      </TextTitle>
      
      <TextSocial>
      <InstagramLogo size={28}/>
        <Text weight={600} height={1.7} color="vinho" size="16">
          {socialmedia}
        </Text>
      </TextSocial>

      <DescriptionDoctor>
        <Text weight={400} height={1.7} color="vinho" size="16">
          {description}
        </Text>
      </DescriptionDoctor>

      <ButtonDoctor>
        <Button title="Marcar consulta" variant="primario"/>
      </ButtonDoctor>
      
      </InfoSection>

    </Container>
    
  )
}

export default InfoComponent;