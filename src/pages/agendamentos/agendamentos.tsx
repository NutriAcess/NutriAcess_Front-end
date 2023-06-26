import { useState } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { Text } from "../../components/text/text";
import {
  Container,
  Content,
  ContentButton,
  Description,
  StyledText,
  Title,
} from "./agendamentos.styles";
import InfoComponent from "./cardcomponent/infocomponent/infocomponent";
import { data } from "./data";
import Input from "./input/input";

const Agendamentos = () => {
  const [filteredData, setFilteredData] = useState(data);

  const normalizeString = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  };
  const handleSearch = (value: string) => {
    const normalizedSearchTerm = normalizeString(value);
    
    const filtered = data.filter((item) => {
      const normalizedTitle = normalizeString(item.title.toLowerCase());
      const normalizedSpecialty = normalizeString(item.specialty.toLowerCase());
      
      return (
        normalizedTitle.includes(normalizedSearchTerm) ||
        normalizedSpecialty.includes(normalizedSearchTerm)
      );
    });
    
    setFilteredData(filtered);
  };
  

  return (
    <Container>
      <Header />
      <Content>
        <Title>
          <Text height={47} weight={700} color="branco" size="32">
            Encontre o seu especialista aqui
          </Text>
        </Title>

        <Description>
          <Text height={30} weight={600} color="branco" size="16">
            Converse com um profissional sem sair de casa
          </Text>
        </Description>

        <ContentButton>
          <Input onSearch={handleSearch} />
        </ContentButton>
      </Content>
      {filteredData.length === 0 ? (
        <StyledText>
          <Text height={600} weight={600} color="preto" size="32" >
      Nenhum especialista encontrado. Por favor, tente novamente.
    </Text>
        </StyledText>
      
    
     
      ) : (
        filteredData.map((item, idx) => (
          <InfoComponent
            key={`key_${idx}`}
            title={item.title}
            slug={item.slug}
            specialty={item.specialty}
            verify={item.verify}
            socialmedia={item.socialmedia}
            description={item.description}
            image={item.image}
          />
        ))
      )}

      <Footer />
    </Container>
  );
};

export default Agendamentos;
