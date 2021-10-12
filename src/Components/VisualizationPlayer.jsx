import { useState, useEffect } from "react";
import styled from "styled-components";
import Chart from "./Chart";
import ControlPane from "./ControlPane";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const VisualizationPlayer = ({ frames, range, newList }) => {
  const [frameIndex, setFrameIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(50);

  // Animate frames
  useEffect(() => {
    if (playing) {
      setTimeout(() => {
        incrementFrameIndex();
      }, speed);
    }
  }, [playing, incrementFrameIndex, speed]);

  function togglePlaying() {
    setPlaying(!playing);
  }

  function incrementFrameIndex() {
    if (frameIndex === frames.length - 1) {
      setPlaying(false);
      setFrameIndex(frames.length - 1);
      return;
    }
    setFrameIndex(frameIndex + 1);
  }

  function reduceFrameIndex() {
    console.log("de_incrementFrameIndex");
    if (frameIndex === 0) {
      setPlaying(false);
      setFrameIndex(0);
      return;
    }
    setFrameIndex(frameIndex - 1);
  }

  function resetFrameIndex() {
    console.log("Reset framIndex");
    setFrameIndex(0);
  }

  // Resets frame index when newList called, as if the new lists needs less frmes than the current
  // one the re-render causes an index out of bounds error.
  function handleNewList() {
    newList();
    resetFrameIndex();
    setPlaying(false);
  }

  function changeSpeed(value) {
    setSpeed(value);
  }

  return (
    <Container id="vis_player">
      <Chart
        range={range}
        list={frames[frameIndex].list}
        focus={frames[frameIndex].focus}
      />
      <ControlPane
        togglePlaying={togglePlaying}
        incrementFrames={incrementFrameIndex}
        reduceFrameIndex={reduceFrameIndex}
        handleNewList={handleNewList}
        changeSpeed={changeSpeed}
      />
    </Container>
  );
};

export default VisualizationPlayer;
