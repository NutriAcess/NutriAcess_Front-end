import React from 'react';
import styled from 'styled-components';
import imagemNutri from "../img/ft-profissional.svg";
import imagemEstrela from "../img/estrelas.svg";
import Textn from "../componentes/textnutri"



const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50%;
  margin-top: -25%;
  width: 8%;

`;

const Container = styled.div`
  

`;

const Nutri = () => {
  return (
    <Container>
      <Container1>
        <img src={imagemNutri} alt="" />
        <img src={imagemEstrela} alt="" />
      </Container1>
      <Textn />
    </Container>

  );
};

export default Nutri;