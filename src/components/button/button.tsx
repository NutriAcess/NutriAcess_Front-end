import { Container, TitleButton } from "./button.styles";

interface IButton {
  title: string;
  variant: "primario" | "secundario";
}

const Button = ({ title, variant }: IButton) => {
  return (
    <Container variant={variant}>
      <TitleButton variant={variant}>{title}</TitleButton>
    </Container>
  );
};

export default Button;
