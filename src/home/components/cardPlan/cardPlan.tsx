import Button from "../../../components/button/button";
import { Text } from "../../../components/text/text";
import Topic from "../../../components/topic/topic";
import { Check, X } from "@phosphor-icons/react";
import {
  Container,
  Description,
  Header,
  Price,
  TitleHeader,
  Topics,
} from "./cardPlan.styles";

interface ICardPlan {
  titleplan: string;
  destaque: "primario" | "secundario";
  shadow: "primario" | "secundario";
  description: string;
  plan: {
    value: number;
    duration: string;
  };
  topics: {
    isChecked: boolean;
    title: string;
  }[];
}

const CardPlan = ({
  titleplan,
  destaque,
  shadow,
  description,
  plan,
  topics,
}: ICardPlan) => {
  function separateValues() {
    const inteiro = Math.floor(plan.value);
    const decimal = (plan.value - inteiro).toFixed(2).toString().slice(-2);

    return {
      inteiro,
      decimal,
    };
  }

  return (
    <Container shadow={shadow}>
      <Header destaque={destaque}>
        <TitleHeader>{titleplan}</TitleHeader>
      </Header>
      <Price>
        <Text weight={600} height={1.2} color="preto" size="36">
          R$ {separateValues().inteiro}
          <Text weight={600} height={1.2} color="preto" size="16">
            ,{separateValues().decimal}
          </Text>
          <Text weight={600} height={1.2} color="cinza_escuro" size="16">
            /{plan.duration}
          </Text>
        </Text>
      </Price>
      <Description>
        <Text weight={300} height={1.2} color="preto" size="12">
          {description}
        </Text>
      </Description>
      <Topics>
        <li>
          {topics.map((item) => (
            <ul>
              {item.isChecked ? <Check color="green" weight="bold" size={25} /> : <X color="red" weight="bold" size={25}/> }
            <span>{item.title}</span>
            </ul>
          ))}
        </li>
      </Topics>
    </Container>
  );
};

export default CardPlan;
