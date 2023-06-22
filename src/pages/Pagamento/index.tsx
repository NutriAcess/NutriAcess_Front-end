import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/button';
import Header from '../../components/header/header';


import { PopUpPagamento } from "../../components/popuppagamento/popuppagamento";
import { InfoNutri } from './componentes/infonutri';
import { ResumePag } from './componentes/resumepag/resumepag';
import { SideLeft } from './componentes/sideLeft/sideLeft';
import {
  ButtonConfirm,
  Container,
  Content,
  HeaderPayment,
  SideRight
} from "./pagamento.styles";





const Formasdepagamento = () => {
  const navigate = useNavigate();
  const [openPopupPagamento, setOpenPopupPagamento] = useState(false);
  
  return (
    <Container>
      <Header />
      <Content>
        <SideLeft/>
          
        <SideRight>
          <HeaderPayment>
            <InfoNutri />
          </HeaderPayment>
          <ResumePag/>
          <ButtonConfirm>
            <Button title='Confirmar pagamento' variant='primario' xs onClick={() => setOpenPopupPagamento(true)}/>
          </ButtonConfirm>
          <PopUpPagamento
                open={openPopupPagamento} 
                onClose={() => setOpenPopupPagamento(false)} 
              />
        </SideRight>
      </Content>
    </Container>
  );
};

export default Formasdepagamento;
