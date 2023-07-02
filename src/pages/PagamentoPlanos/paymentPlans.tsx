import React, { useEffect, useState } from "react";
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
import { useAuth } from "../../hooks/useAuth";

export const PaymentPlans = () => {
  const navigate = useNavigate();
  const [openPopupPagamentoPlans, setOpenPopupPagamentoPlans] = useState(false);
  const [valorPlano, setValorPlano] = useState(0); // Alterado para número
  const [ready, setReady] = useState(false);
  const { user, isLogged, token } = useAuth();

  useEffect(() => {
    if (!isLogged) navigate("/sign-in-user");
    else setReady(true);
  }, []);

  return ready ? (
    <Container>
      <Header />
      <Content>
        <SideLeft setValorPlano={setValorPlano} valorPlano={valorPlano} />
        <SideRight>
          <HeaderPayment></HeaderPayment>
          <ResumePag valorPlano={valorPlano} />
          <ButtonConfirm onClick={() => setOpenPopupPagamentoPlans(true)}>
            <Button title="Confirmar pagamento" variant="primario" xs />
          </ButtonConfirm>
          <PopUpPagamentoPlans
            open={openPopupPagamentoPlans}
            onClose={() => setOpenPopupPagamentoPlans(false)}
          />
        </SideRight>
      </Content>
    </Container>
  ) : (
    <></>
  );
};
