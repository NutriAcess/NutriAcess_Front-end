import {
  Envelope,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  WhatsappLogo,
} from "@phosphor-icons/react";
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

const Footer = () => {
  return (
    <Container>
      <Content>
        <Contact>
          <Text weight={600} height={26} color={"branco"} size={"20"}>
            Nossos Contatos
          </Text>

          <TypeContact href="mailto:contatonutriacess@gmail.com" target="_blank">
            <Envelope color="black" size={24} />
            <Text weight={600} height={19} color="branco" size="14">
              contatonutriacess@gmail.com
            </Text>
          </TypeContact>

          <TypeContact href="https://linktr.ee/nutriacess_" target="_blank">
            <WhatsappLogo color="black" size={24} />
            <Text weight={600} height={19} color="branco" size="14">
              (11) 98864-7358
              
            </Text>
          </TypeContact>

          <TypeContact href="https://goo.gl/maps/zxhAdAgNgqKgrvKb7" target="_blank">
            <MapPin color="black" size={24} />
            <Text weight={600} height={19} color="branco" size="14">
              Rua Tito 54 - São Paulo - 05051-000
            </Text>
          </TypeContact>
        </Contact>

        <FollowUp>
          <Text weight={600} height={26} color={"branco"} size={"20"}>
            Siga-nos
          </Text>
          <IconsFollowUp>
            <a href="https://www.instagram.com/_nutriacess/" target="_blank" rel="noreferrer"><InstagramLogo color="black" size={24} /></a>
            <a href="https://web.facebook.com/instituto.proa" target="_blank" rel="noreferrer"><FacebookLogo color="black" size={24} /></a>
            <a href="https://linktr.ee/nutriacess_" target="_blank" rel="noreferrer"><LinkedinLogo color="black" size={24} /></a>
          </IconsFollowUp>
        </FollowUp>

        <MapSite>
          <Text weight={600} height={26} color="branco" size="20">
            Mapa do Site
          </Text>
          <Text weight={600} height={19} color="branco" size="14">
            <a href="/">Home</a>
          </Text>
          <Text weight={600} height={19} color="branco" size="14">
            <a href="/agendamentos" >Agendamentos</a>
          </Text>
          <Text weight={600} height={19} color="branco" size="14">
            <a href="/planos">Planos</a>
          </Text>
          <Text weight={600} height={19} color="branco" size="14">
            <a href="/profile-user">Minha Área</a>
          </Text>
          <Text weight={600} height={19} color="branco" size="14">
            <a href="/sobre-nos">Nossa Equipe</a>
          </Text>
        </MapSite>
      </Content>

      <Rights>
        <Text weight={700} height={18} color="branco" size="14">
          2023. NutriAcess. Todos os direitos reservados.
        </Text>
      </Rights>
    </Container>
  );
};

export default Footer;
