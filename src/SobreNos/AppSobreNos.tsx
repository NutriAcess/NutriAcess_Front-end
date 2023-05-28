import { BigTitle, Container, Content, Contenter } from "./AppSobreNos.styles";
import HomeMembers from "./members/HomeMembers";
import Header from "../components/header/header";


import LogoLinkedin from "../assets/linkedin.svg"
import LogoGithub from "../assets/github.svg"
import LogoLinktree from "../assets/linktree.svg"
import LogoNutriAcess from "../assets/logonutriacess.svg"

import FotoLuis from "../assets/luis.svg"
import FotoAlan from "../assets/Alan.svg"
import FotoGusta from "../assets/Gustavo.svg"
import FotoErica from "../assets/Erica.svg"
import FotoClaudia from "../assets/Claudia.svg"
import FotoSamuel from "../assets/Samuca.svg"
import FotoHenrique from "../assets/Henrique.svg"
import FotoLais from "../assets/Lais.svg"
import FotoLilian from "../assets/Lilian.svg"
import Footer from "../components/footer/footer";
import { Text } from "../components/text/text";






function SobreNos() {
  return (
    <Container>

    <Header/>

    <BigTitle>

      <Text color="preto" height={2} weight={700} size="42">
        Sobre Nós
      </Text>

    </BigTitle>

    

    <Content>

    <HomeMembers

      image = {{alt: "", url: FotoAlan}}
      
      
      title="Alan Gonçalves"

      stack="Full Stack"

      hrefpessoalhub="https://www.linkedin.com/in/alangon%C3%A7alvesjr/"

      hrefpessoallink="https://github.com/lanDev01"


      social_media = {{alt: "", url: LogoLinkedin}}
      social_mediaa = {{alt: "", url: LogoGithub}}

    />

    <HomeMembers

      image = {{alt: "", url: FotoLuis}}

      title="Luis Santana"

      stack="Full Stack"

      hrefpessoalhub="https://github.com/Luisjunior119"

      hrefpessoallink="https://www.linkedin.com/in/luis-santana-junior/"

      social_media = {{alt: "", url: LogoLinkedin}}
      social_mediaa = {{alt: "", url: LogoGithub}}

    />

    <HomeMembers

      image = {{alt: "", url: LogoNutriAcess}}
      
      title="Contato NutriAcess"

      stack="Linktree e Github"

      hrefpessoalhub="https://github.com/Luisjunior119/demoday-nutriacess"

      hrefpessoallink="https://linktr.ee/_nutriacess"

      social_media = {{alt: "", url: LogoLinktree}}
      social_mediaa = {{alt: "", url: LogoGithub}}

    />

    <HomeMembers

      image = {{alt: "", url: FotoGusta}}

      title="Gustavo Senise"

      stack="Back-end"

      hrefpessoalhub="https://github.com/gussenise"

      hrefpessoallink="https://www.linkedin.com/in/gustavosenise/"

      social_media = {{alt: "", url: LogoLinkedin}}
      social_mediaa = {{alt: "", url: LogoGithub}}

    />

    <HomeMembers

      image = {{alt: "", url: FotoErica}}
      
      title="Erica Inácia"

      stack="Back-end"

      hrefpessoalhub="https://github.com/EricaInaciadeLima"

      hrefpessoallink="https://www.linkedin.com/in/erica-inacia-82b7b7206/"

      social_media = {{alt: "", url: LogoLinkedin}}
      social_mediaa = {{alt: "", url: LogoGithub}}

    />

    </Content>

    <Contenter>
    <HomeMembers

      image = {{alt: "", url: FotoClaudia}}


      title="Claudia Lopes"

      stack="Front-end"

      hrefpessoalhub="https://github.com/ClahLopes"

      hrefpessoallink="https://www.linkedin.com/in/claudiadossantoslopes/"

      social_media = {{alt: "", url: LogoLinkedin}}
      social_mediaa = {{alt: "", url: LogoGithub}}

    />

    <HomeMembers

      image = {{alt: "", url: FotoSamuel}}

      title="Samuel"

      stack="Front-end"

      hrefpessoalhub="https://github.com/SAMUKISZHSD"

      hrefpessoallink="https://www.linkedin.com/in/samuel-allan-635290258/"

      social_media = {{alt: "", url: LogoLinkedin}}
      social_mediaa = {{alt: "", url: LogoGithub}}

    />

    <HomeMembers

      image = {{alt: "", url: FotoHenrique}}

      title="Henrique"

      stack="Back-end"

      hrefpessoalhub="https://github.com/Henriquesantos12"

      hrefpessoallink="https://www.linkedin.com/in/henrique--dev/"

      social_media = {{alt: "", url: LogoLinkedin}}
      social_mediaa = {{alt: "", url: LogoGithub}}

/>

    <HomeMembers

      image = {{alt: "", url: FotoLais}}

      title="Lais Carvalho"

      stack="Front-end"

      hrefpessoalhub="https://github.com/Lais205"

      hrefpessoallink="https://www.linkedin.com/in/lais-carvalho-772113268/"

      social_media = {{alt: "", url: LogoLinkedin}}
      social_mediaa = {{alt: "", url: LogoGithub}}

    />

      <HomeMembers

        image = {{alt: "", url: FotoLilian}}

        title="Lilian Carvalho"

        stack="Front-end"

        hrefpessoalhub="https://github.com/Lais205"

        hrefpessoallink="https://github.com/Lilian-Carvalho25"

        social_media = {{alt: "", url: LogoLinkedin}}
        social_mediaa = {{alt: "", url: LogoGithub}}

    />
    </Contenter>
    <Footer/>
    </Container>
    
  );
}

export default SobreNos;
