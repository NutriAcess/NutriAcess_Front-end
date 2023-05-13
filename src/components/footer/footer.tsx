import { Text } from "../text/text";
import {
  Contact,
  Container,
  Content,
  FollowUp,
  IconsFollowUp,
  MapSite,
  Rights,
  TypeContact,
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

          <TypeContact>
            <Envelope color="black" size={25} />
            <Text weight={300} height={1.7} color={"branco"} size={"16"}>
              SuporteNutriAcess@gmail.com
            </Text>
          </TypeContact>

          <TypeContact>
            <WhatsappLogo color="black" size={25} />
            <Text weight={300} height={1.7} color={"branco"} size={"16"}>
              (11) 98858-5086
            </Text>
          </TypeContact>

          <TypeContact>
            <MapPin color="black" size={25} />
            <Text weight={300} height={1.7} color={"branco"} size={"16"}>
              SmartFit: São Paulo, SP - o8180-000{" "}
            </Text>
          </TypeContact>
        </Contact>

        <FollowUp>
          <Text weight={600} height={1.7} color={"branco"} size={"20"}>
            Siga-nos
          </Text>
          <IconsFollowUp>
            <InstagramLogo color="black" size={25} />
            <FacebookLogo color="black" size={25} />
            <LinkedinLogo color="black" size={25} />
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
