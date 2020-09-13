import React, { useEffect } from "react";
import styled from "styled-components";
import Bar from "../Bar/Bar";

const BarChart = ({ bars, score, setRanking }) => {
  const maxY = 100; // y축 0 ~ 100
  const maxX = 100; // x축 0 ~ 100
  const lenY = 3; // 그래프 높이 (예시: maxY * lenY => 300px)

  // 평균 점수
  const avgScore = Math.floor(
    bars.reduce((pre, cur) => {
      return pre + cur;
    }, 0) / bars.length
  );

  // 해당 점수 바 위치
  const redBar = Math.floor(score / (maxX / bars.length));

  // 상위 퍼센트
  const rankScore =
    score === 0 ? 0 : Math.floor(100 - (redBar / bars.length) * 100);

  // 상위 퍼센트 변환
  useEffect(() => {
    setRanking(rankScore);
  });

  return (
    <BarChartComponent>
      <BarChartList maxY={maxY} lenY={lenY}>
        {bars.map((bar, idx) => {
          return (
            <Bar
              key={idx}
              id={idx}
              bar={bar}
              maxY={maxY}
              lenY={lenY}
              redBar={redBar}
            />
          );
        })}
      </BarChartList>
      <BarChartTextBox>
        <BarChartText>낮음</BarChartText>
        <BarChartText>
          {score === 0 ? "0점" : `평균(${avgScore}점)`}
        </BarChartText>
        <BarChartText>높음</BarChartText>
      </BarChartTextBox>
    </BarChartComponent>
  );
};

export default BarChart;

const BarChartComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BarChartList = styled.ul`
  width: 100%;
  height: ${(props) =>
    // 그래프 높이
    props.maxY * props.lenY}px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border-left: 1px solid #000;
  border-bottom: 1px solid #000;
`;

const BarChartTextBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0.5em 0;
`;

const BarChartText = styled.p`
  font-size: 1.2rem;
`;
