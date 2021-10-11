import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  margin-top: 5%;
  flex-wrap: wrap;
  height: 85vh;
  width: 85vw;
  max-height: 800px;
  border: 1px solid #555;
  align-items: flex-end;
  justify-content: center;
`;

const Bar = styled.div`
  width: calc(100% / ${(props) => props.range});
  height: ${props => props.height + "%"};
  border: 1px solid black;
  background-color: ${props => props.focus ? "#bb9af7" : "#7aa2f7"};

`;
const Chart = ({ list, range, focus }) => {

  return (
    <Container>
      {
        list.map((number, index) => {
          return <Bar key={Math.random()} height={number} range={range} focus={focus === index ? true : false} />
        })
      }
    </Container>
  )
}

export default Chart
