import Header from "../components/header/header";
import { Container, Content, ContentButton, Description, Title } from "./agendamentos.styles";
import Input from "./input/input";
import { Text } from "../components/text/text";
import InfoComponent from "./cardcomponent/infocomponent/infocomponent";
import ftprofissional from "../assets/ft-profissional.svg"
import ftprofissional2 from "../assets/ft-profissional-2.svg"
import ftprofissional3 from "../assets/ft-profissional-3.svg"
import ftprofissional4 from "../assets/ft-profissional-4.svg"
import ftprofissional5 from "../assets/ft-profissional-5.svg"
import ftprofissional6 from "../assets/ft-profissional-6.svg"
import ftprofissional7 from "../assets/ft-profissional-7.svg"
import LogoVerify from "../assets/verify.svg"
import Footer from "../components/footer/footer";


const Agendamentos = () => {
  return (
    <Container>
      <Header />
      <Content>

        <Title>
          <Text height={1.7} weight={600} color="branco" size="32">
            Encontre o seu especialista aqui
          </Text>
        </Title>

        <Description>
          <Text height={1.7} weight={600} color="branco" size="16">
            Converse com um profissional sem sair de casa
          </Text>
        </Description>

        <ContentButton>
          <Input />
        </ContentButton>

        </Content>
        

        <InfoComponent
          title="Camila Gabriela"

          verify= {{alt: "", url: LogoVerify}}

          socialmedia="camig-nutri"

          description="Olá! Me chamo Camila, sou nutricionista e atuo com demandas de compulsividade, veganismo, vida física ativa, flexibilidade, entre outros. Posso te ajudar nessa caminhada rumo ao autoconhecimento e equilíbrio. Conte comigo, agende sua consulta."

          image={{ alt: "", url: ftprofissional }}
        />

        <InfoComponent
          title="Rogério Motta"

          verify= {{alt: "", url: LogoVerify}}
  
          socialmedia="motta-nutri"

          description="Olá! Sou um profissional dedicado e apaixonado por ajudar as pessoas a alcançarem uma alimentação saudável. Tenho vasto conhecimento em orientação personalizada, visando o bem-estar e a qualidade de vida dos meus pacientes."
  
          image={{ alt: "", url: ftprofissional2 }}
         />

        <InfoComponent
          title="Luciano Barbosa"

          verify= {{alt: "", url: LogoVerify}}
  
          socialmedia="lucianobarbosa-nutri"
  
          description="Seja bem vindo(a)!   Sou nutricionista especialista em nutrição esportiva e familiar. Posso te ajudar a viver bem e conquistar mais qualidade de vida. Ficou curioso? Então me siga e marque uma consulta e inicie agora o seu processo de autoconhecimento!"
  
          image={{ alt: "", url: ftprofissional3 }}
         />

        <InfoComponent
          title="Luiza Silva"
          verify= {{alt: "", url: ""}}
  
          socialmedia="Luizasilva-nutrition"
  
          description="Seja bem vindo(a)!   Sou nutricionista especialista em nutrição esportiva e familiar. Posso te ajudar a viver bem e conquistar mais qualidade de vida. Ficou curioso? Então me siga e marque uma consulta e inicie agora o seu processo de autoconhecimento!"
  
          image={{ alt: "", url: ftprofissional4 }}
         />

         <InfoComponent
          title="Julia Barsalobre"
          verify= {{alt: "", url: LogoVerify}}
  
          socialmedia="Julinha-nutrition"
  
          description="Seja bem vindo(a)! Sou nutricionista especialista em nutrição esportiva e familiar. Posso te ajudar a viver bem e conquistar mais qualidade de vida. Ficou curioso? Então me siga e marque uma consulta e inicie agora o seu processo de autoconhecimento!"
  
          image={{ alt: "", url: ftprofissional5 }}
         />

          <InfoComponent
          title="Maria Silveira"
          verify= {{alt: "", url: ""}}

        
          socialmedia="Mariaa-nutrition"
  
          description="Seja bem vindo(a)! Sou nutricionista especialista em nutrição esportiva e familiar. Posso te ajudar a viver bem e conquistar mais qualidade de vida. Ficou curioso? Então me siga e marque uma consulta e inicie agora o seu processo de autoconhecimento!"
  
          image={{ alt: "", url: ftprofissional6 }}
         />

          <InfoComponent
          title="Silvana Medeiros"
          verify= {{alt: "", url: LogoVerify}}
  
          socialmedia="Silva-nutrition"
  
          description="Possuo 12 anos de experiência como nutricionistas com foco familiar. Posso te ajudar a viver bem e conquistar mais qualidade de vida. Ficou curioso? Então me siga e marque uma consulta e inicie agora o seu processo de autoconhecimento!"
  
          image={{ alt: "", url: ftprofissional7 }}
         />

         <Footer />
    </Container>
  )
};

export default Agendamentos;