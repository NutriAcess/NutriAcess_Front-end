import CardOperation from "../components/cardOperation/cardOperation";
import { Container } from "./operation.styles";
import womenrunner from "../../../assets/passo_1.svg";
import imagemertilo from "../../../assets/passo_2.jpg";
import womencomputer from "../../../assets/passo_3.jpg";

const Operation = () => {
  return (
    <Container>
      <CardOperation
        icon={true}
        number_title="01."
        title="Nos diga os seus objetivos."
        description="Responda algumas perguntas simples sobre
        suas informações e metas pessoais, para que seja feito um plano da maneira que você deseja."
        direction="row"
        image={{ alt: "Mulher correndo", url: womenrunner }}
      />

      <CardOperation
        icon={false}
        number_title="02."
        title="Escolha o plano ideal para você."
        description="Observe os nossos planos e escolha o plano ideal para o seu crescimento pessoal. Não se preocupe! Temos preços super acessíveis."
        direction="row-reverse"
        image={{ alt: "Caixa de mertilos", url: imagemertilo }}
      />

      <CardOperation
        icon={true}
        number_title="03."
        title="Tenha acesso as suas consultas e ao seu plano personalizado."
        description="Após a finalização das etapas anteriores, é hora de aproveitar! Passe em consultas com nossos profissionais, e redefina suas metas sempre que quiser, de forma acessível, no conforto da sua casa."
        direction="row"
        image={{ alt: "Mulher no computador", url: womencomputer }}
      />
    </Container>
  );
};

export default Operation;
