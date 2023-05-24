import styled from "styled-components";

interface IHeader {
  destaque: "primario" | "secundario";
}

interface IContainer {
  shadow: "primario" | "secundario";
}

export const Container = styled.div<IContainer>`
  display: flex;
  margin-top: -100px;
  background-color: ${({ theme }) => theme.Colors.branco};
  flex-direction: column;
  width: 350px;
  height: 350px;
  border-radius: 10px;
`;

export const Header = styled.div<IHeader>`
  display: flex;
  background-color: ${({ theme, destaque }) =>
    destaque === "primario" ? theme.Colors.laranja_destaque : "transparent"};
  color: ${({ theme, destaque }) =>
    destaque === "primario" ? theme.Colors.branco : theme.Colors.preto};
  height: 52px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const TitleHeader = styled.div`
  display: flex;
  padding: 12px 24px;
  font-weight: 600;
  align-items: center;
`;

export const Price = styled.span`
  display: flex;
  justify-content: center;
  margin: 24px 0;
`;

export const Description = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 0;
`;

export const Topics = styled.li`
  list-style-type: none;
`;

export const Topico = styled.ul`
  display: flex;
  gap: 20px;
  margin-left: 50px;
`;

export const Checked = styled.ul`
  display: flex;
  align-items: center;
`;

export const Divbutton = styled.div`
  display: flex;
  margin-top: 16px;

  padding: 0 24px;
`;
