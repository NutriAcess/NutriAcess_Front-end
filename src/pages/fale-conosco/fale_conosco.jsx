import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Inicio from "./start/inicio";
import Service from "./service/service";
import Assessment from "./assessment/assessment";

const Fale_conosco = () => {
  return (
    <div>
      <Header />
      <Inicio />
      <Service />
      <Assessment />
      <Footer />
    </div>
  );
};

export default Fale_conosco;
