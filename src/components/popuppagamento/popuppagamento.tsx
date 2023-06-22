import { X } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import logopagamento from "../../assets/LogoPagamento.png";
import pagamentoconcluido from "../../assets/pagamentoconcluido.png";
import { Text } from '../text/text';
import { Container, DivModalSignUp, DivText, DivX, Header, Pagamento, Question } from './popuppagamento.styles';

interface ModalProps {
    open: boolean;
    onClose: () => void;
}
export interface IPopUpPagamento {
    open: boolean;
}

export const PopUpPagamento = ({ open, onClose }: ModalProps) => {
    const navigate = useNavigate();

    if (!open) return null;
    return (

        <Container open={open}>
            <DivModalSignUp>
                    <Header>
                        <Question>
                            <img src={logopagamento}></img>
                        </Question>
                        <DivX onClick={() => navigate("/")}>
                            <X size={32} color="white"></X>
                        </DivX>
                    </Header>
                    <Pagamento>
                        <img src={pagamentoconcluido}></img>
                    </Pagamento>
                    <DivText>
                        <Text color='branco' height={21} size="18" weight={700}>Agora sim você está pronto para ter uma Nutrição Saudável</Text>
                        <Text color='branco' height={21} size="16" weight={700}>Aproveite sua consulta!</Text>
                    </DivText>
        </DivModalSignUp>
    </Container >
  )
}
