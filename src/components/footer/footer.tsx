import { Text } from "../text/text";
import {
  Contact,
  Container,
  Content,
  FollowUp,
  IconsContact,
  IconsFollowUp,
  MapSite,
  Rights,
} from "./footer.styles";
import {
  Envelope,
  WhatsappLogo,
  MapPin,
  InstagramLogo,
  FacebookLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <Container>
      <Content>
        <Contact>
          <Text weight={600} height={1.7} color={"branco"} size={"20"}>
            Nossos Contatos
          </Text>

          <Text weight={300} height={1.7} color={"branco"} size={"16"}>
            <Envelope color="black" weight="bold" size={25}/> SuporteNutriAcess@gmail.com
          </Text>

          <Text weight={300} height={1.7} color={"branco"} size={"16"}>
            <WhatsappLogo color="black" weight="bold" size={25}/> (11) 98858-5086
          </Text>

          <Text weight={300} height={1.7} color={"branco"} size={"16"}>
            <MapPin color="black" weight="bold" size={25}/> SmartFit: São Paulo, SP - o8180-000{" "}
          </Text>
        </Contact>

        <FollowUp>
          <Text weight={600} height={1.7} color={"branco"} size={"20"}>
            Siga-nos
          </Text>
          <IconsFollowUp>
            <InstagramLogo color="black" weight="bold" size={25}/>
            <FacebookLogo color="black" weight="bold" size={25}/>
            <LinkedinLogo color="black" weight="bold" size={25}/>
          </IconsFollowUp>
        </FollowUp>

        <MapSite>
          <Text weight={600} height={1.7} color={"branco"} size={"20"}>
            Mapa do Site
          </Text>
          <Text weight={300} height={1.7} color={"branco"} size={"16"}>
            Home
          </Text>
          <Text weight={300} height={1.7} color={"branco"} size={"16"}>
            Agendar Consulta
          </Text>
          <Text weight={300} height={1.7} color={"branco"} size={"16"}>
            Planos
          </Text>
          <Text weight={300} height={1.7} color={"branco"} size={"16"}>
            Minha Área
          </Text>
          <Text weight={300} height={1.7} color={"branco"} size={"16"}>
            Nossa Equipe
          </Text>
        </MapSite>
      </Content>

      <Rights>
        <Text weight={300} height={1.7} color={"branco"} size={"16"}>
          2023. NutriAcess. Todos os direitos reservados.
        </Text>
      </Rights>
    </Container>
  );
};

export default Footer;
