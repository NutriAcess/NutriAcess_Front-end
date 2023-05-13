import CardGoals from "../components/cardGoals/cardGoals";
import { Container, SectionGoals } from "./goals.styles";
import IconAcessible from "../../assets/IconeAcessivel.svg";
import IconAccompaniment from "../../assets/IconeAcompanhamento.svg";
import IconFuture from "../../assets/IconeFuturo.svg";
import IconTime from "../../assets/IconeTempo.svg";
import IconMark from "../../assets/IconeMeta.svg";
import IconFamily from "../../assets/IconeFamilia.svg";

const Goals = () => {
  return (
    <Container>
      <SectionGoals>
        <CardGoals
          image={{ url: IconAcessible, alt: "Icone de acessibilidade" }}
          title="Consultas com nutricionistas"
          description="Passe em consultas com nutricionistas de forma prática e acessível."
        />

        <CardGoals
          image={{ url: IconAccompaniment, alt: "Icone de acompanhamento" }}
          title="Acompanhamento pessoal"
          description="Personalize suas preferências e tenha um acompanhamento de perto!"
        />

        <CardGoals
          image={{ url: IconFuture, alt: "Icone de visão futura" }}
          title="Invista no seu futuro"
          description="Invista em seu futuro com nossos nutricionistas e obtendo resultados a longo prazo."
        />

        <CardGoals
          image={{ url: IconTime, alt: "Icone de tempo" }}
          title="Gerenciamento de tempo"
          description="Gerencie melhor o seu tempo com o planejador de refeições, de forma rápida e dinâmica."
        />

        <CardGoals
          image={{ url: IconMark, alt: "Icone de metas" }}
          title="Alcance suas metas"
          description="Alcance suas metas com mais rapidez, e abra espaço para metas novas!"
        />

        <CardGoals
          image={{ url: IconFamily, alt: "Icone de família" }}
          title="Plano familiar"
          description="Passe em consultas, e defina metas personalizados em família."
        />
      </SectionGoals>
    </Container>
  );
};

export default Goals;
