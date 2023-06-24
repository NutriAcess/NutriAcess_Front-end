import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from "../../components/header/header";
import { data } from "../agendamentos/data";
import { CardMarcarConsulta } from "./CardMarcarConsulta/CardMarcarConsulta";
import { Container } from "./marcarConsulta.styles";

export const MarcarConsulta = () => {
  const params = useParams();
  const nutriInfos: any = params.nutri;
  const [nutri, setNutri] = useState<any>(null);

  useEffect(() => {
    if (nutri===null) {
      let nutriData = data.find((el: any) => el.slug===nutriInfos);
      setNutri(nutriData);
    }
  }, [nutri])

  return (
    <Container>
      <Header />
      {
        nutri!==null ? <CardMarcarConsulta
          image={{
            url: nutri.image.url,
            alt: nutri.image.alt,
          }}
          nutricionist={nutri.title}
          socialmedia={nutri.socialmedia}
          slug={nutri.slug}
        /> : <></>
      }
    </Container>
  );
};
