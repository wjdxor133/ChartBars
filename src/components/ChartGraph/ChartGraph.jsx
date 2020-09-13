import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import BarChart from "./BarChart/BarChart";

const GraphChart = () => {
  const [score, setScore] = useState(0); // 검색 score
  const [inputScore, setInputScore] = useState(""); // 입력 받은 score
  const [bars, setBars] = useState([]); // 16개의 차트 바 담을 배열
  const [ranking, setRanking] = useState(0); // 상위 퍼센트

  useEffect(() => {}, [inputScore, score]);

  // 점수 검색 함수
  const scoreSearch = () => {
    const percentBars = [
      15,
      25,
      38,
      50,
      65,
      70,
      78,
      82,
      85,
      78,
      69,
      58,
      47,
      30,
      20,
      10,
    ];
    setBars(percentBars);
    setScore(inputScore);
  };

  return (
    <GraphChartComponent>
      <GraphChartHeader>
        <GraphChartHeaderTextBox>
          <GraphChartText>내 인바디 랭킹</GraphChartText>
          <GraphChartText textColor="gray">
            남성, 또래(25~35세) 기준
          </GraphChartText>
        </GraphChartHeaderTextBox>
        <GraphChartSearchBox>
          <GraphChartInput
            value={inputScore}
            placeholder="점수 입력해주세요"
            onChange={(e) => setInputScore(e.target.value.slice(0, 2))}
          ></GraphChartInput>
          <GraphChartButton onClick={() => scoreSearch()}>
            확인
          </GraphChartButton>
        </GraphChartSearchBox>
        <GraphChartText textColor="red">InBody</GraphChartText>
      </GraphChartHeader>
      {/* 차트 바 */}
      <BarChart bars={bars} score={score} setRanking={setRanking} />
      <GraphChartFooter>
        <GraphChartFooterBox>
          <GraphChartFooterText textColor="gray">
            내 인바디 점수
          </GraphChartFooterText>
          <GraphChartFooterText>
            {score === 0 ? "0점" : `${score}점`}
          </GraphChartFooterText>
        </GraphChartFooterBox>
        <GraphChartFooterBox>
          <GraphChartFooterText textColor="gray">랭킹</GraphChartFooterText>
          <GraphChartFooterText>{`상위 ${ranking}%`}</GraphChartFooterText>
        </GraphChartFooterBox>
      </GraphChartFooter>
    </GraphChartComponent>
  );
};

export default GraphChart;

const GraphChartComponent = styled.section`
  width: 50%;
  height: 60%;
`;

const GraphChartHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const GraphChartHeaderTextBox = styled.div`
  margin-bottom: 2em;
`;

const GraphChartText = styled.p`
  font-size: 1.8rem;
  font-weight: bold;

  ${(props) =>
    props.textColor === "gray" &&
    css`
      font-size: 1.3rem;
      color: #6a6a6a;
    `}

  ${(props) =>
    props.textColor === "red" &&
    css`
      color: #b71c1c;
    `}
`;

const GraphChartSearchBox = styled.div`
  height: 40%;
  display: flex;
`;

const GraphChartInput = styled.input`
  background-color: #c4c4c4;
`;

const GraphChartButton = styled.button`
  background-color: #000;
  color: white;
  font-weight: bold;
  margin-left: 0.5em;
  :hover {
    cursor: pointer;
  }
`;

const GraphChartFooter = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 1em;
`;

const GraphChartFooterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 3em;

  :nth-child(1) {
    padding-right: 3em;
    border-right: 1px solid #000;
  }
`;

const GraphChartFooterText = styled.p`
  font-weight: bold;
  font-size: 2rem;

  ${(props) =>
    props.textColor === "gray" &&
    css`
      font-weight: bold;
      font-size: 1rem;
      margin-bottom: 1em;
      color: #6a6a6a;
    `}
`;
