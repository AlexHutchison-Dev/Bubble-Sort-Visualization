import Title from './Title';
import { generateList, unsortList, bubbleSort } from '../Helpers/ListHelpers';
import styled from 'styled-components';
import VisualizationPlayer from './VisualizationPlayer';

const Container = styled.div`
    display: flex;
    width: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

const BubbleSort = () => {

  const range = 50;
  var list = unsortList(generateList(range));

  var frames = bubbleSort(list);

  return (
    <Container className="BubbleSort Container">
      <Title />
      <VisualizationPlayer frames={frames} />
    </Container>
  )
}

export default BubbleSort
