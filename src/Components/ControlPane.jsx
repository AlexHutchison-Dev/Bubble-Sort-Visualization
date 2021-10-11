import { Button } from "reactstrap";
import styled from "styled-components";

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 30%;
  padding: 2%;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;
const ControlPane = ({
  togglePlaying,
  incrementFrames,
  reduceFrameIndex,
  newList,
}) => {
  return (
    <Container>
      <ButtonGroup>
        <Button outline color="primary" onClick={newList}>
          New List
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button outline color="primary" onClick={reduceFrameIndex}>
          {"<<"}
        </Button>
        <Button outline color="primary" onClick={togglePlaying}>
          Play
        </Button>
        <Button outline color="primary" onClick={incrementFrames}>
          {">>"}
        </Button>
      </ButtonGroup>
      <ButtonGroup></ButtonGroup>
    </Container>
  );
};

export default ControlPane;
