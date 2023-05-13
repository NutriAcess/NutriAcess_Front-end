import { Container, TitleButton } from "./button.styles";

interface IButton {
  title: string;
  variant: "primario" | "secundario" | "terciario";
  width: number;
  padding: number;
  border: number;
  size: number;
}

const Button = ({ title, variant, width, padding, border, size }: IButton) => {
  return (
    <Container
      variant={variant}
      width={width}
      padding={padding}
      border={border}
    >
      <TitleButton variant={variant} size={size}>
        {title}
      </TitleButton>
    </Container>
  );
};

export default Button;
