import { Container, TitleButton } from "./button.styles";
interface IButton {
  xs?: boolean;
  title: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  variant: "primario" | "secundario" | "terciario" | "quartenario" | "quinto";
  disable ?: boolean;
}

const Button = ({ title, variant, icon, xs, onClick }: IButton) => {
  return (
    <Container variant={variant} xs={xs} onClick={onClick}>
      <TitleButton variant={variant} icon={icon}>
        {title}
      </TitleButton>
      {icon && icon}
    </Container>
  );
};

export default Button;
