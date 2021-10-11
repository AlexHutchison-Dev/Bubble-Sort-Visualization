import { Button } from 'reactstrap';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 30%;
  padding: 2%;
`;
const ControlPane = ({ togglePlaying, incrementFrames }) => {
  return (
    <Container>
      <Button outline onClick={togglePlaying}>Play</Button>
      <Button outline onClick={incrementFrames}>{">>"}</Button>
    </Container>
  )
}

export default ControlPane
