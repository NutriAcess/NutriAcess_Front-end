import Button from "../../components/button/button"
import Header from "../../components/header/header"
import { Text } from "../../components/text/text"
import { ResumePag } from "../Pagamento/componentes/resumepag/resumepag"
import { SideLeft } from "../Pagamento/componentes/sideLeft/sideLeft"
import { ButtonConfirm, Content, HeaderPayment, SideRight } from "../Pagamento/pagamento.styles"
import { Container, Type } from "./paymentPlans.styles"

export const PaymentPlans = () => {
  return (
    <Container>
      <Header />
      <Content>
        <SideLeft />
        <SideRight>
          <HeaderPayment>
            <Type>
              <Text color='preto' height={20} size='18' weight={600} > Plano Família  </Text> 
            </Type>
          </HeaderPayment>
          <ResumePag />
          <ButtonConfirm>
            <Button title='Confirmar pagamento' variant='primario' xs />
          </ButtonConfirm>
        </SideRight>
      </Content>
    </Container>
  )
}
