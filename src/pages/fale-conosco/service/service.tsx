import Email from "../../../assets/foto email.png";
import Tel from "../../../assets/fundo telefone.png";
import Insta from "../../../assets/logo do insta.png";
import Linkedin from "../../../assets/logo linkedln.png";
import Redes from "../../../assets/redes_sociais.png";
import { Text } from "../../../components/text/text";
import {
  Container,
  DivGeneral,
  DivNumber,
  DivRedes,
  DivTeste,
  ImgRedes,
  ImgTel,
  POne,
  TelephoneLink,
  TelephoneLink1,
  Title,
} from "./service.styles";

const Service = () => {
  return (
    <Container>
      <Title>
        <Text weight={600} height={32} color="preto" size="36">
          Canais de Atendimento
        </Text>
      </Title>
      <DivGeneral>
        <DivNumber>
          <ImgTel
            src={Tel}
            alt="Telefone"
            style={{ width: "70px", height: "auto" }}
          />
          <POne>Telefones para atendimento </POne>
          <TelephoneLink href="tel:1196666-6666">
            {" "}
            (11) 96666-6666{" "}
          </TelephoneLink>
        </DivNumber>

        <DivNumber>
          <ImgTel
            src={Email}
            alt="Email"
            style={{ width: "70px", height: "auto" }}
          />
          <POne> Nosso Email </POne>
          <TelephoneLink href="mailto:contatonutriacess@gmail.com">
            {" "}
            contatonutriacess@gmail.com{" "}
          </TelephoneLink>
        </DivNumber>

        <DivNumber>
          <ImgTel
            src={Redes}
            alt="Redes Sociais"
            style={{ width: "70px", height: "auto" }}
          />
          <POne> Redes Sociais </POne>

          <DivTeste>
            <DivRedes>
              <ImgRedes
                src={Insta}
                alt="Instagram"
                style={{ width: "15px", height: "auto" }}
              />
              <TelephoneLink1
                href="https://www.instagram.com/_nutriacess/"
                target="blank"
              >
                {" "}
                _nutriacess
              </TelephoneLink1>
            </DivRedes>

            <DivRedes>
              <ImgRedes
                src={Linkedin}
                alt="Linkedin"
                style={{ width: "15px", height: "auto" }}
              />
              <TelephoneLink1
                href="https://www.linkedin.com/in/nutriacess-276255277/"
                target="blank"
              >
                {" "}
                nutriacess_
              </TelephoneLink1>
            </DivRedes>
          </DivTeste>
        </DivNumber>
      </DivGeneral>
    </Container>
  );
};

export default Service;
