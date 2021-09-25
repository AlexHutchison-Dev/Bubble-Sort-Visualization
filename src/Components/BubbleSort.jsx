import Chart from './Chart';
import Title from './Title';
import { generateList, unsortList } from '../Helpers/ListHelpers';

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

  const range = 100;
  var list = unsortList(generateList(range));


  return (
    <Container className="BubbleSort Container">
      <Title />
      <Chart list={list} />
    </Container>
  )
}

export default BubbleSort
