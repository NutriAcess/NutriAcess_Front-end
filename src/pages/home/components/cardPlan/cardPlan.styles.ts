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
  border-radius: 10px;
`;

export const Header = styled.div<IHeader>`
  display: flex;
  background-color: ${({ theme, destaque }) =>
    destaque === "primario" ? theme.Colors.laranja_escuro : "transparent"};

  border-radius: 10px;

  padding: 24px;

  align-items: center;
`;

export const TitleHeader = styled.div`
  display: flex;
  margin-left: 24px;
  align-items: center;
`;

export const Price = styled.span`
  display: flex;
  margin: 12px 0px 12px 24px;
`;

export const Description = styled.div`
  display: flex;
  margin-left: 24px;
  margin-bottom: 32px;
`;

export const Topics = styled.li`
  margin-left: -64px;
  list-style-type: none;
`;

export const Topico = styled.ul`
  display: flex;
  margin-left: 24px;

  align-items: center;

  margin-bottom: 8px;
`;

export const Checked = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 16px;
`;

export const Divbutton = styled.div`
  display: flex;
  margin-top: 34px;

  padding: 0 24px;
`;
