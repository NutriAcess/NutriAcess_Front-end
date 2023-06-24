import { Text } from "../../../../components/text/text";
import funcs from '../../../../config/funcs';
import { Container, Imagem, InformationNutri } from "./styles";

interface ICardInfoNutri {
  image: {
    url: string;
    alt: string;
  };
  nutricionist: string;
  specialty: string;
  dates: any;
}

export const InfoNutri = ({
  image,
  nutricionist,
  specialty,
  dates,
}:ICardInfoNutri) => {  
  return (
    <Container>
      <Imagem>
        <img src={image.url} alt={image.alt}/>
      </Imagem>
      <InformationNutri>
        <Text color="preto" height={30} size="28" weight={600}>
          {nutricionist}
        </Text>
        <Text color="preto" height={30} size="20" weight={550}>
          {specialty}
        </Text>
        <Text color="preto" height={20} size="16" weight={550}>
          {(dates.day<10 ? "0" : "") + dates.day} de {funcs.getMonthName(dates.month)} de {dates.year} às {dates.time}
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
