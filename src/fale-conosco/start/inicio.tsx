import { Text } from "../../components/text/text";
import { Container, DivSubImg, ImgStyled, SubTitle, Title, } from "./Inicio.styles";
import img_inicio from "../../assets/img_inicio.png"

const Inicio = () => {
  return (
    <Container>
      <Title>
        <Text weight={600} height={1.7} color="preto" size="36">
          Fale Conosco 
        </Text>
      </Title>
     <DivSubImg>
      <SubTitle>
        <Text weight={400} height={1.7} color="preto" size="28">
          Oferecemos diversos canais de comunicação. Converse com a gente sempre
          que quiser!
        </Text>
      </SubTitle>
      <ImgStyled src={img_inicio} alt="fale conosco"/>
      </DivSubImg>
    </Container>
    
   
  );
};

export default Inicio;
