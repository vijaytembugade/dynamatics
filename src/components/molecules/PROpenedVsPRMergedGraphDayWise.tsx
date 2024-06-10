import React from "react";
import { Chart } from "chart.js";
import { Line } from "react-chartjs-2";

import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Heading } from "../typography/Heading";
import styled from "styled-components";

import { FillColor, Label } from "../../types";
import useTwoValueDayWiseCompareData from "../../hooks/useTwoValueDayWiseCompareData";
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 24px;
  background-color: var(--bgColor);
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
  tooltips: {
    mode: "index",
  },
};
const PROpenedVsPRMergedGraphDayWise = (props: Props) => {
  const [keyOne, keyTwo] = useTwoValueDayWiseCompareData(
    Label.PRMerged,
    Label.PROpen
  );

  return (
    <Container>
      <Heading>Total PR Merged vs Total PR Open (Daywise)</Heading>
      <Line
        options={options}
        datasetIdKey="PROpenedVsPRMergedGraphDayWise"
        data={{
          labels: [...Object.keys(keyOne)],
          datasets: [
            {
              id: 1,
              label: Label.PRMerged,
              borderColor: FillColor.PRMergedColor,
              backgroundColor: FillColor.PRMergedColor,
              data: Object.keys(keyOne).map((item: keyof typeof keyOne) => {
                return keyOne[item]?.count;
              }),
            },
            {
              label: "PR Open",
              id: 2,
              data: Object.keys(keyTwo).map((item: keyof typeof keyTwo) => {
                return keyTwo[item]?.count;
              }),
              borderColor: FillColor.PROpenColor,
              backgroundColor: FillColor.PROpenColor,
            },
          ],
        }}
      />
    </Container>
  );
};

export default PROpenedVsPRMergedGraphDayWise;
