import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/button/button';
import Header from '../../components/header/header';
import funcs from '../../config/funcs';

import { PopUpPagamento } from "../../components/popuppagamento/popuppagamento";
import { data } from "../agendamentos/data";
import { InfoNutri } from "./componentes/infonutri";
import { SideLeft, SideLeftProps } from './componentes/sideLeft/sideLeft';
import {
  ButtonConfirm,
  Container,
  Content,
  SideRight
} from "./pagamento.styles";
import { ResumePag } from './componentes/resumepag/resumepag';

const Formasdepagamento = () => {
  const navigate = useNavigate();
  const [openPopupPagamento, setOpenPopupPagamento] = useState(false);

  const params = useParams();
  const nutriInfos: any = params.nutri;
  const hashInfos: any = params.hash;
  const [nutri, setNutri] = useState<any>(null);
  const [dates, setDates] = useState<any>(null);
  const [valorPlano, setValorPlano] = useState('');

  useEffect(() => {
    if (nutri === null) {
      let nutriData = data.find((el: any) => el.slug === nutriInfos);
      let infos = funcs.base64ToString(hashInfos);
      let dateData = JSON.parse(infos);

      setNutri(nutriData);
      setDates(dateData);
    }
  }, [nutri]);

  function validateFields() {
    // Implemente a validação dos campos aqui
    return true;
  }


  return (
    <Container>
      <Header />
      <Content>
      <SideLeft setValorPlano={setValorPlano} valorPlano={valorPlano} />



        <SideRight>
          {nutri !== null ? (
            <InfoNutri
              image={{
                url: nutri.image.url,
                alt: nutri.image.alt,
              }}
              nutricionist={nutri.title}
              specialty={nutri.specialty}
              dates={dates}
            />
          ) : (
            <></>
          )}

          <ResumePag valorPlano={valorPlano} />

          <ButtonConfirm>
            <Button
              title="Confirmar pagamento"
              variant="primario"
              xs
              onClick={() => setOpenPopupPagamento(true)}
              disable={!validateFields()}
            />
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
