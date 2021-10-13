import { useState } from "react";
import { Button } from "reactstrap";
import styled from "styled-components";
import { debounce } from "../Helpers/library";

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 30%;
  padding: 3% 1.25%;
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
  handleNewList,
  changeSpeed,
  changeRange,
}) => {
  const [speed, setSpeed] = useState(50);
  const [range, setRange] = useState(50);

  function handleChange(event) {
    if (event.target.name === "speed") {
      updateSpeed(event.target.value);
      return;
    }
    debounce(updateRange(event.target.value), 50);
  }

  function updateSpeed(value) {
    setSpeed(value);
    changeSpeed(value);
  }

  function updateRange(value) {
    setRange(value);
    changeRange(value);
  }

  return (
    <Container>
      <ButtonGroup>
        <Button
          outline
          color="primary"
          name="new-list"
          size="sm"
          onClick={handleNewList}
        >
          New List
        </Button>
        <label htmlFor="range">
          Range
          <input
            id="range"
            name="range"
            type="range"
            min="10"
            max="100"
            value={range}
            onChange={handleChange}
            style={{ width: "80%" }}
          />
        </label>
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
            name="speed"
            type="range"
            min="3"
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
