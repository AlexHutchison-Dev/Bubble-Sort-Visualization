import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Chart from './Chart';
import ControlPane from './ControlPane';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const VisualizationPlayer = ({ frames, range }) => {
  const [frameIndex, setFrameIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (playing) {
      play();
    }
    async function play() {
      await sleep(250).then(
        incrementFrameIndex());
    }

    function sleep(ms) {
      return new Promise(resolve => setTimeout((resolve, ms)));
    }
  }, [playing, incrementFrameIndex]);

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
  return (
    <Container>
      <Chart range={range} list={frames[frameIndex].list} focus={frames[frameIndex].focus} />
      <ControlPane togglePlaying={togglePlaying} incrementFrames={incrementFrameIndex} />
    </Container>
  )
}

export default VisualizationPlayer
