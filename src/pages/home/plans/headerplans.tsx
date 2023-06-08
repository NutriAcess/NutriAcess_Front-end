
import { Text } from '../../../components/text/text'
import { Header, SubTitle, Title } from './headerplans.styles'

export const Headerplans = () => {
  return (
    <Header>
        <Title>
          <Text weight={600} height={1.7} color="branco" size="32">
            Conheça nossos planos
          </Text>
        </Title>
        <SubTitle>
          <Text weight={400} height={1.7} color="branco" size="20">
            Experimente nossas soluções e escolha o plano ideal para o seu
            próximo projeto.
          </Text>
        </SubTitle>
      </Header>
  )
}
