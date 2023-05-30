import { BigTitle, Container, Content, Contenter } from "./AppSobreNos.styles";
import HomeMembers from "./members/HomeMembers";
import Header from "../components/header/header";

import Footer from "../components/footer/footer";
import { Text } from "../components/text/text";
import { data } from "./data";
import { dataa } from "./dataa";

function SobreNos() {
  return (
    <Container>
    <Header/>

    <BigTitle>
      <Text color="preto" height={65} weight={700} size="42">
        Sobre Nós
      </Text>
    </BigTitle>

    <Content>

    {data.map((item) => {
      return(<HomeMembers
        image={item.image}
        title={item.title}
        stack={item.stack}
        hrefpessoalhub={item.hrefpessoalhub}
        hrefpessoallink={item.hrefpessoallink}
        ancor_linktree={item.ancor_linktree}
        social_media = {item.social_media}
        social_mediaa = {item.social_mediaa}
      />)
    })}

    </Content>

    <Contenter>

    {dataa.map((doubleitem) => {
      return(<HomeMembers
        image={doubleitem.image}
        title={doubleitem.title}
        stack={doubleitem.stack}
        hrefpessoalhub={doubleitem.hrefpessoalhub}
        hrefpessoallink={doubleitem.hrefpessoallink}
        ancor_linktree={doubleitem.ancor_linktree}
        social_media = {doubleitem.social_media}
        social_mediaa = {doubleitem.social_mediaa}
      />)
    })}
    
    </Contenter>
    
    <Footer/>
    </Container>
    
  );
}

export default SobreNos;
