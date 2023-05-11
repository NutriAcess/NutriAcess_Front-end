import Header from "../components/header/header";
import {
  Container,
  DivButton,
  DivText,
  ImageWrapper,
  LogoPartners,
  Partners,
} from "./home.styles";
import Button from "../components/button/button";
import { Text } from "../components/text/text";
import About from "./about/about";
import Goals from "./goals/goals";
import Operation from "./operation/operation";
import Data from "./data/data";
import growth from "../assets/Growth.svg";
import smartfit from "../assets/Smart-fit.svg";
import prati from "../assets/Pratí.svg";
import Feedback from "./feedback/feedback";
import Plans from "./plans/plans";
import Footer from "../components/footer/footer";

const Home = () => {
  return (
    <Container>
      <Header />

      <ImageWrapper>
        <DivText>
          <Text weight={600} height={1.7} color="vinho" size="64">
            Nutra sua saúde e bem estar com a NutriAcess
          </Text>
        </DivText>
        <DivButton>
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
      </Partners>

      <Feedback />

      <Plans/>
      <Footer />
    </Container>
  );
};

export default Home;
