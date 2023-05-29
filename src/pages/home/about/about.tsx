import { Container, SectionInfo, SectionInfo2 } from "./about.styles";
import Info from "../components/cardInfo/cardInfo";
import appleabout from "../../../assets/appleabout.svg";
import womenabout from "../../../assets/womenabout.svg";

const About = () => {
  return (
    <Container>
      <SectionInfo>
        <Info
          title="Nutrição acessível, saúde imbatível!"
          description="Fundada no primeiro semestre de 2023 por alunos do
              Instituto Proa, a NutriAcess é uma plataforma que visa
              a democratização a consultas nutricionais a preço social,
              comprometidos em oferecer um serviço acessível e de
              qualidade para todos os nossos pacientes."
          direction="row"
          image={{ alt: "Mulher com cesta de frutas", url: womenabout }}
        />
      </SectionInfo>

      <SectionInfo2>
        <Info
          title="Como a NutriAcess pode te ajudar?"
          description="A NutriAcess pode te ajudar ao tornar o que é difícil
          parecer fácil, guiando você na busca pela
          sua melhor versão através da nossa plataforma.
          Contamos com profissionais qualificados, prontos para
          oferecer um atendimento personalizado, tudo a apenas
          um clique de distância."
          direction="row-reverse"
          image={{ alt: "Mão segurando uma maça", url: appleabout }}
        />
      </SectionInfo2>
    </Container>
  );
};

export default About;
