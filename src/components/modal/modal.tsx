import { IModal } from "./modal.types";
import { Container, Content, PressArea } from "./styles.modal";

export const Modal = ({ children, isVisible, onClose }: IModal) => {
  return (
    <Container isVisible={isVisible}>
      <PressArea onClick={onClose} />
      <Content>{children}</Content>
    </Container>
  );
};
