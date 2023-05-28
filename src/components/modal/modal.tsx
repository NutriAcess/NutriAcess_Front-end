import { useTheme } from "styled-components";
import { IModal } from "./modal.types";
import {
  CloseButton,
  Container,
  Content,
  Header,
  PressArea,
} from "./styles.modal";
import { X } from "@phosphor-icons/react";
import { Text } from "../text/text";

export const Modal = ({ children, isVisible, onClose, title }: IModal) => {
  const theme = useTheme();

  return (
    <Container isVisible={isVisible}>
      <PressArea onClick={onClose} />
      <Content>
        <Header title={title}>
          {title && (
            <Text color="preto" height={21} size="24" weight={600}>
              {title}
            </Text>
          )}
          <CloseButton onClick={onClose}>
            <X color={theme.Colors.preto} weight="regular" size={32} />
          </CloseButton>
        </Header>
        {children}
      </Content>
    </Container>
  );
};
