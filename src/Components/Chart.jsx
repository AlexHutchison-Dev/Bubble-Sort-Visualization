import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  margin-top: 5%;
  flex-wrap: wrap;
  height: 85vh;
  width: 85vw;
  max-height: 1000px;
  border: 1px solid #555;
  align-items: flex-end;
`;

const Bar = styled.div`
  width: calc(2% - 2px);
  height: ${props => props.height + "%"};
  border: 1px solid black;
  background-color: green;

`;
const Chart = ({ list }) => {

  return (
    <Container>
      {
        list.map(number => {
          return <Bar key={Math.random()} height={number} />
        })
      }
    </Container>
  )
}

export default Chart
