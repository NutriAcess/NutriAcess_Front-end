import {
  Envelope,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { Text } from "../text/text";
import {
  ButtonMapSite,
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
  const navigate = useNavigate();

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

          <ButtonMapSite onClick={() => navigate("/")}>
            <Text weight={600} height={19} color="branco" size="14">
              Home
            </Text>
          </ButtonMapSite>

          <ButtonMapSite onClick={() => navigate("/agendamentos")}>
            <Text weight={600} height={19} color="branco" size="14">
              Agendamentos
            </Text>
          </ButtonMapSite>
          <ButtonMapSite onClick={() => navigate("/planos")}>
            <Text weight={600} height={19} color="branco" size="14">
              Planos
            </Text>
          </ButtonMapSite>

          <ButtonMapSite onClick={() => navigate("/profile-user")}>
            <Text weight={600} height={19} color="branco" size="14">
              Minha Área
            </Text>
          </ButtonMapSite>

          <ButtonMapSite onClick={() => navigate("/sobre-nos")}>
            <Text weight={600} height={19} color="branco" size="14">
              Nossa Equipe
            </Text>
          </ButtonMapSite>
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
