import { Box, Container } from "./step.styles";

interface IStep {
    index?: number;
    active: boolean;
}

function Step({index, active} : IStep) {
  return (
    <Container active={active}>
        <Box active={active}>
        {index}
        </Box>
    </Container>
  )
}

export default Step