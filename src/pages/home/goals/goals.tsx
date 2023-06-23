import CardGoals from "../components/cardGoals/cardGoals";
import { goalsData } from "./goals.data";
import { Container, SectionGoals } from "./goals.styles";

const Goals = () => {
  return (
    <Container>
      <SectionGoals>
      {goalsData.map(({ description, image, title }, idx) => (
          <CardGoals key={`key_${idx}`} description={description} image={image} title={title} />
        ))}
      </SectionGoals>
    </Container>
  );
};

export default Goals;
