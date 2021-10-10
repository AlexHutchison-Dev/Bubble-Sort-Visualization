import { useState } from 'react';
import Chart from './Chart';
import Title from './Title';
import { generateList, unsortList, bubbleSort } from '../Helpers/ListHelpers';

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

const BubbleSort = () => {

  const range = 10;
  var list = unsortList(generateList(range));
  const [frameIndex, setFrameIndex] = useState(0);

  //TODO Need to move this down to chart component other wise the 
  // useEffect recalls bubbleSort and replace s frmes array ever frame.

  var frames = bubbleSort(list);

  function handleClick(event) {
    event.preventDefault();
    if (frameIndex < frames.length) {
      setFrameIndex(frameIndex + 1);
    }
  }

  return (
    <Container className="BubbleSort Container">
      <Title />
      <Chart list={frames[frameIndex]} />
      <button onClick={handleClick}>Next Frame</button>
    </Container>
  )
}

export default BubbleSort
