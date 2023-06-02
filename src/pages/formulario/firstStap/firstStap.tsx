import Button from "../../../components/button/button"
import { Text } from "../../../components/text/text"
import { Container } from "../formulario.styles"


export const FirstStap = () => {
  return (
    <Container>
        <Text weight={400} height={16} size="14" color="vinho">Etapa 1</Text>
        <Button variant="primario" title="Reconhecimento Físico"/>
        <Text weight={400} height={21} size="18" color="preto">Eu desejo:</Text>

        <Text weight={400} height={21} size="18" color="preto">Eu sou:</Text>
        <Button variant="primario" title="Anterior"/>
        <Button variant="primario" title="Próximo"/>
    </Container>
  )
}
