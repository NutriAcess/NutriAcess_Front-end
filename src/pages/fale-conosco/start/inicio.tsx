import { Text } from "../../../components/text/text";
import img_inicio from "../../../assets/img_inicio.svg";
import {
  Container,
  DivImage,
  DivSubImg,
  ImgStyled,
  SubTitle,
  Title,
} from "./Inicio.styles";

const Inicio = () => {
  return (
    <Container>
      <Title>
        <Text weight={600} height={36} color="preto" size="36">
          Fale Conosco
        </Text>
      </Title>
      <DivSubImg>
        <SubTitle>
          <Text weight={400} height={36} color="preto" size="24">
            Oferecemos diversos canais de comunicação. Converse com a gente
            sempre que quiser!
          </Text>
        </SubTitle>
        <DivImage>
          <ImgStyled src={img_inicio} alt="fale conosco" />
        </DivImage>
      </DivSubImg>
    </Container>
  );
};

export default Inicio;
