import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import { Text } from "../components/text/text";
import { Container, Content, ContentButton, Description, Title } from "./agendamentos.styles";
import InfoComponent from "./cardcomponent/infocomponent/infocomponent";
import { data } from "./data";
import Input from "./input/input";


const Agendamentos = () => {
  return (
    <Container>
      <Header />
      <Content>

        <Title>
          <Text height={47} weight={700} color="branco" size="32">
            Encontre o seu especialista aqui
          </Text>
        </Title>

        <Description>
          <Text height={30} weight={600} color="branco" size="16">
            Converse com um profissional sem sair de casa
          </Text>
        </Description>

        <ContentButton>
          <Input />
        </ContentButton>

        </Content>

        
        {data.map((item) => {
          return(<InfoComponent
            title={item.title}
            verify= {item.verify}
    
            socialmedia={item.socialmedia}
    
            description={item.description}
    
            image={item.image}
           />)
        })}

         

         <Footer />
    </Container>
  )
};

export default Agendamentos;