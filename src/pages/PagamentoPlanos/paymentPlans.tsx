import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import Header from "../../components/header/header";
import { PopUpPagamentoPlans } from "../../components/popuppagamentoplans/popuppagamentoplans";
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
  const [openPopupPagamentoPlans, setOpenPopupPagamentoPlans] = useState(false);

  return (
    <Container>
      <Header />
      <Content>
        <SideLeft />
        <SideRight>
          <HeaderPayment>
          </HeaderPayment>
          <ResumePag />
          <ButtonConfirm onClick={() => setOpenPopupPagamentoPlans(true)}>
            <Button title="Confirmar pagamento" variant="primario" xs  />
          </ButtonConfirm>
          <PopUpPagamentoPlans
                open={openPopupPagamentoPlans} 
                onClose={() => setOpenPopupPagamentoPlans(false)} 
              />
        </SideRight>
      </Content>
    </Container>
  );
};
