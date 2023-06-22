import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import Header from "../../components/header/header";
import { ResumePag } from "../Pagamento/componentes/resumepag/resumepag";
import { SideLeft } from "../Pagamento/componentes/sideLeft/sideLeft";
import {
  ButtonConfirm,
  Content,
  HeaderPayment,
  SideRight,
} from "../Pagamento/pagamento.styles";
import { Container } from "./paymentPlans.styles";

export const PaymentPlans = () => {
  const navigate = useNavigate();

  function handleButton() {
    alert("Pagamento confirmado com sucesso. Faça a escolha do seu nutricionista!")
    navigate("/")
  }

  return (
    <Container>
      <Header />
      <Content>
        <SideLeft />
        <SideRight>
          <HeaderPayment>
          </HeaderPayment>
          <ResumePag />
          <ButtonConfirm onClick={() => handleButton()}>
            <Button title="Confirmar pagamento" variant="primario" xs />
          </ButtonConfirm>
        </SideRight>
      </Content>
    </Container>
  );
};
