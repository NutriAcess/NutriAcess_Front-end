import styled from 'styled-components';
import Textn from "../componentes/textnutri";
import imagemEstrela from "../img/estrelas.svg";
import imagemNutri from "../img/ft-profissional.svg";



const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 860px;
  width: 120px;

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