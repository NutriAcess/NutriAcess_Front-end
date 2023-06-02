import stapByStap from "../../assets/stapbystap.svg"
import { FirstStap } from "./firstStap/firstStap"
import { Container } from "./formulario.styles"

export const Formulario = () => {
  return (
    <Container>
        <img src={stapByStap} alt="Passo-a-passo"/>
        <FirstStap/>
    </Container>
  )
}
