import { useNavigate } from "react-router-dom";
import growth from "../../assets/Growth.svg";
import prati from "../../assets/Pratí.svg";
import smartfit from "../../assets/Smart-fit.svg";
import ellasBrasil from "../../assets/logoellasbrasil.svg";
import studiowoz from "../../assets/logostudiowoz.svg";
import Button from "../../components/button/button";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { Text } from "../../components/text/text";
import { Plans } from "../home/plans/plans";
import About from "./about/about";
import Data from "./data/data";
import Feedback from "./feedback/feedback";
import Goals from "./goals/goals";
import {
  Container,
  DivButton,
  DivText,
  ImageWrapper,
  LogoPartners,
  LogoPartners1,
  Partners,
} from "./home.styles";
import Operation from "./operation/operation";

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <Container>
      <Header />

      <ImageWrapper>
        <DivText>
          <Text weight={600} height={94} color="branco" size="64">
            Nutra sua saúde
          </Text>
          <Text weight={600} height={94} color="branco" size="64">
            e bem estar com
          </Text>
          <Text weight={600} height={94} color="branco" size="64">
            a NutriAcess
          </Text>
        </DivText>
        <DivButton onClick={() => navigate("/planos")}>
          <Button variant="primario" title="Conheça nossos planos" />
        </DivButton>
      </ImageWrapper>

      <About />

      <Goals />

      <Operation />

      <Data />

      <Partners>
        <LogoPartners>
          <img src={growth} alt="Logo da Growth" />
        </LogoPartners>
        <LogoPartners>
          <img src={smartfit} alt="Logo da SmartFit" />
        </LogoPartners>
        <LogoPartners>
          <img src={prati} alt="Logo da Prati" />
        </LogoPartners>
        <LogoPartners1>
          <img src={studiowoz} alt="Logo da Prati" />
        </LogoPartners1>
        <LogoPartners1>
          <img src={ellasBrasil} alt="Logo da Prati" />
        </LogoPartners1>
      </Partners>

      <Feedback />

      <Plans />
      <Footer />
    </Container>
  );
};

export default Home;
