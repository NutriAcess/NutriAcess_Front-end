import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import funcs from '../../config/funcs';
import Button from '../button/button';
import { Text } from '../text/text';
import { Container, DivModalSignUp, DivText } from './popupconsulta.styles';
import './styles.css';
;
interface ModalProps {
    onClose: () => void;
    slug : string;
    date : any;
}

export const PopUpConsulta = ({ onClose, slug, date }: ModalProps) => {
    const navigate = useNavigate();
    const [hours, setHours] = useState<string>('08:00');

    // Encode
    function encodeData () {
        let data = {...date, time: hours};
        return funcs.stringToBase64(JSON.stringify(data));
    }

    // Time for close item
    setTimeout(() => onClose(), 15000);

    return <Container>
        <DivModalSignUp>
            {/* <Header>
                <DivX>
                    <CaretLeft size={32} color='#000000' onClick={onClose} />
                </DivX>
            </Header> */}

            <DivText>
                <Text color='laranja_destaque' height={21} size="18" weight={700}> Consulta selecionada: </Text>
                
                <Text color='preto' height={21} size="18" weight={700}>{(date.day<10 ? "0" : "") + date.day} de {funcs.getMonthName(date.month)} de {date.year}</Text>

                <div className="hoursBox">
                    <button type="button" className={hours==='07:00' ? 'active' : ''} onClick={() => setHours('07:00')}>07:00</button>
                    <button type="button" className={hours==='08:00' ? 'active' : ''} onClick={() => setHours('08:00')}>08:00</button>
                    <button type="button" className={hours==='09:00' ? 'active' : ''} onClick={() => setHours('09:00')}>09:00</button>
                    <button type="button" className={hours==='10:00' ? 'active' : ''} onClick={() => setHours('10:00')}>10:00</button>
                    <button type="button" className={hours==='11:00' ? 'active' : ''} onClick={() => setHours('11:00')}>11:00</button>
                    <button type="button" className={hours==='12:00' ? 'active' : ''} onClick={() => setHours('12:00')}>12:00</button>
                    <button type="button" className={hours==='13:00' ? 'active' : ''} onClick={() => setHours('13:00')}>13:00</button>
                    <button type="button" className={hours==='14:00' ? 'active' : ''} onClick={() => setHours('14:00')}>14:00</button>
                    <button type="button" className={hours==='15:00' ? 'active' : ''} onClick={() => setHours('15:00')}>15:00</button>
                    <button type="button" className={hours==='16:00' ? 'active' : ''} onClick={() => setHours('16:00')}>16:00</button>
                    <button type="button" className={hours==='17:00' ? 'active' : ''} onClick={() => setHours('17:00')}>17:00</button>
                    <button type="button" className={hours==='18:00' ? 'active' : ''} onClick={() => setHours('18:00')}>18:00</button>
                </div>

                <Text color='preto' height={21} size="16" weight={700}>Confirma sua consulta?</Text>
                <Button title='Confirmar' variant='primario' onClick={() => navigate(`/pagamento-nutri/${slug}/${encodeData()}`)}/>
            </DivText>
        </DivModalSignUp>
    </Container>
}
