
import { X } from "phosphor-react";
import AvatarAbacaxi from "../../assets/avatarAbacaxi.png";
import AvatarLaranja from "../../assets/avatarLaranja.png";
import AvatarMaca from "../../assets/avatarMaca.png";
import AvatarUva from "../../assets/avatarUva.png";
import { Text } from "../text/text";
import { Container, DivModalPhoto, DivPhoto, DivX, Header, Title } from "./styles";

interface ModalProps {
    open: boolean;
    onClose: () => void;
}
export interface IPopUpImage {
    open: boolean;
}

export const PopUpPhoto = ({ open, onClose }: ModalProps) => {

    if (!open) return null;

    return (
        <Container open={open}>
            <DivModalPhoto>
                <Header>
                    <Title>
                        <Text color='preto' height={21} size="24" weight={700}>Escolha uma foto para alteração</Text>
                    </Title>
                    <DivX>
                        <X size={32} color='#000000' onClick={onClose}/>
                    </DivX>
                </Header>
                <DivPhoto>
                    <img src={AvatarMaca}/>
                    <img src={AvatarUva}/>
                    <img src={AvatarLaranja}/>
                    <img src={AvatarAbacaxi}/>
                </DivPhoto>
            </DivModalPhoto>
        </Container>
    )
}
