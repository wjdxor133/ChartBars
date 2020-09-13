import React from "react";
import styled from "styled-components";
import ChartGraph from "../../components/ChartGraph/ChartGraph";

const Inbody = () => {
  return (
    <InbobdyPage>
      <ChartGraph />
    </InbobdyPage>
  );
};

export default Inbody;

const InbobdyPage = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
