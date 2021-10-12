import { useState } from "react";
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

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const ControlPane = ({
  togglePlaying,
  incrementFrames,
  reduceFrameIndex,
  handleNewList,
  changeSpeed,
}) => {
  const [speed, setSpeed] = useState(50);
  function handleChange(event) {
    setSpeed(event.target.value);
    changeSpeed(event.target.value);
  }
  return (
    <Container>
      <ButtonGroup>
        <Button outline color="primary" name="new-list" onClick={handleNewList}>
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
      <ButtonGroup>
        <label htmlFor="speed">
          Interval
          <input
            id="speed"
            type="range"
            min="10"
            max="1000"
            value={speed}
            onChange={handleChange}
          />
        </label>
      </ButtonGroup>
    </Container>
  );
};

export default ControlPane;
