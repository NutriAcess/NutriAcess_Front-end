import Header from "../components/header/header";
import { Container, Content, ContentButton, Description, Title } from "./agendamentos.styles";
import Input from "./input/input";
import { Text } from "../components/text/text";
import InfoComponent from "./cardcomponent/infocomponent/infocomponent";
import ftprofissional from "../assets/ft-profissional.svg"
import ftprofissional2 from "../assets/ft-profissional-2.svg"
import ftprofissional3 from "../assets/ft-profissional-3.svg"
import ftprofissional4 from "../assets/ft-profissional-4.svg"

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

          socialmedia="camig-nutri"

          description="Olá! Me chamo Camila, sou nutricionista e atuo com demandas de compulsividade, veganismo, vida física ativa, flexibilidade, entre outros. Posso te ajudar nessa caminhada rumo ao autoconhecimento e equilíbrio. Conte comigo, agende sua consulta."

          image={{ alt: "", url: ftprofissional }}
        />

        <InfoComponent
          title="Rogério Motta"
  
          socialmedia="motta-nutri"

          description="Oi! Meu nome é Rogério e sou graduada em Nutrição pela Universidade Federal de Uberlândia e tenho 2 anos de experiência. Tenho experiências na área de alimentação saudável e preparação física. Atendo crianças, adolescentes e adultos. Vem comigo ter mais qualidade de vida!"
  
          image={{ alt: "", url: ftprofissional2 }}
         />

        <InfoComponent
          title="Luciano Barbosa"
  
          socialmedia="lucianobarbosa-nutri"
  
          description="Seja bem vindo(a)!   Sou nutricionista especialista em nutrição esportiva e familiar. Posso te ajudar a viver bem e conquistar mais qualidade de vida. Ficou curioso? Então marque uma consulta e inicie agora o seu processo de autoconhecimento!"
  
          image={{ alt: "", url: ftprofissional3 }}
         />

        <InfoComponent
          title="Luciano Barbosa"
  
          socialmedia="lucianobarbosa-nutri"
  
          description="Seja bem vindo(a)!   Sou nutricionista especialista em nutrição esportiva e familiar. Posso te ajudar a viver bem e conquistar mais qualidade de vida. Ficou curioso? Então marque uma consulta e inicie agora o seu processo de autoconhecimento!"
  
          image={{ alt: "", url: ftprofissional4 }}
         />
    </Container>
  )
};

export default Agendamentos;