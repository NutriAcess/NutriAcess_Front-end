import { Check, X } from "@phosphor-icons/react";
import { Container, IconTopic, TextTopic } from "./topic.styles";

interface ITopic {
  text: string;
  isChecked: boolean;
}

const Topic = ({ text, isChecked }: ITopic) => {
  return (
    <Container>
      <IconTopic isChecked={isChecked}>
        {isChecked ? <Check /> : <X />}
      </IconTopic>
    </Container>
  );
};

export default Topic;
