import React from "react";
import styled from "styled-components";

const Bar = ({ bar, maxY, lenY, id, redBar }) => {
  // y축 0 ~ 100을 기준으로 계산한 퍼센트 값
  const barScore = `${(bar / maxY) * 100 * lenY}px`;

  return (
    <BarComponent barScore={barScore} id={id} redBar={redBar}></BarComponent>
  );
};

export default Bar;

const BarComponent = styled.li`
  width: 20px;
  height: ${(props) => props.barScore};
  background-color: ${(props) =>
    // 입력값에 해당하는 bar 색상 변경
    props.id === props.redBar ? "red" : "#c4c4c4"};
  margin: 0 10px;
  margin-bottom: -0.01em;
`;
