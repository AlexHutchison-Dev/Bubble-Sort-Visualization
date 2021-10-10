import { Button } from 'reactstrap';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 30%;
`;
const ControlPane = ({ togglePlaying, incrementFrames }) => {
  return (
    <Container>
      <Button onClick={incrementFrames}>{">>"}</Button>
      <Button onClick={togglePlaying}>Play</Button>
    </Container>
  )
}

export default ControlPane
