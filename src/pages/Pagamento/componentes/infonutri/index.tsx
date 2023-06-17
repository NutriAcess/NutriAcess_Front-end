import { Text } from "../../../../components/text/text";
import { Container, Imagem, InformationNutri } from "./styles";
import InfoNutriImage from "../../../../assets/nutri_Camila.jpg";

export const InfoNutri = () => {
  return (
    <Container>
      <Imagem>
        <img src={InfoNutriImage} alt="Imagem Nutricionista" />
      </Imagem>
      <InformationNutri>
        <Text color="preto" height={30} size="28" weight={600}>
          Camila Gabriela
        </Text>
        <Text color="preto" height={30} size="20" weight={550}>
          Nutricionista esportiva
        </Text>
        <Text color="preto" height={20} size="16" weight={550}>
          Data: Sex., 25 de Agosto às 13:00h
        </Text>
        <Text color="preto" height={20} size="16" weight={550}>
          Fuso horário: São Paulo
        </Text>
        <Text color="preto" height={20} size="16" weight={550}>
          Duração: 40 minutos
        </Text>
      </InformationNutri>
    </Container>
  );
};
