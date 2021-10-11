import { useState, useEffect } from "react";
import Title from "./Title";
import { generateList, unsortList, bubbleSort } from "../Helpers/ListHelpers";
import styled from "styled-components";
import VisualizationPlayer from "./VisualizationPlayer";

const Container = styled.div`
  display: flex;
  width: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BubbleSort = () => {
  const [newList, setNewList] = useState(false);
  const range = 50;
  var list = unsortList(generateList(range));
  var frames = bubbleSort(list);

  useEffect(() => {}, [newList]);

  function toggleNewList() {
    setNewList(!newList);
  }
  return (
    <Container className="BubbleSort Container">
      <Title />
      <VisualizationPlayer
        range={range}
        frames={frames}
        newList={toggleNewList}
      />
    </Container>
  );
};

export default BubbleSort;
