import { Container, LinkContainer, NavLinks, TextLinks } from './navbar-styles'

const Navbar = () => {
  return( 
    <Container>
      
      <LinkContainer>
        <NavLinks href="#" >
          <TextLinks>Início</TextLinks>
        </NavLinks> 
      </LinkContainer>

      <LinkContainer>
        <NavLinks href="#">
          <TextLinks>Agendamentos</TextLinks>
          </NavLinks>
      </LinkContainer> 
      
      <LinkContainer>
        <NavLinks href="#" >
          <TextLinks>Sobre nós</TextLinks>
          </NavLinks> 
      </LinkContainer>

      <LinkContainer>
        <NavLinks href="#" >
          <TextLinks>Planos</TextLinks>
          </NavLinks> 
      </LinkContainer>
      
      <LinkContainer>
        <NavLinks href="#">
          <TextLinks>Fale Conosco</TextLinks>
          </NavLinks> 
      </LinkContainer>
      
    </Container>
  )
}

export default Navbar;