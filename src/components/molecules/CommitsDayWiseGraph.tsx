import { Chart } from "chart.js";
import { Bar } from "react-chartjs-2";

import {
  BarElement,
  CategoryScale,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import styled from "styled-components";
import { Heading } from "../typography/Heading";

import useTwoValueDayWiseCompareData from "../../hooks/useTwoValueDayWiseCompareData";
import { FillColor, Label } from "../../types";
import Card from "../atoms/Card";
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
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
const CommitsDayWiseGraph = () => {
  const [keyOne] = useTwoValueDayWiseCompareData(Label.Commits, Label.PROpen);

  const totalCommits = Object.keys(keyOne).reduce((acc, curr) => {
    if (keyOne[curr] && keyOne[curr]?.count) {
      return acc + keyOne[curr]?.count;
    }
    return acc;
  }, 0);

  return (
    <>
      <Card
        heading="Avg commits per day"
        value={Number((totalCommits / Object.keys(keyOne).length).toFixed(0))}
      />
      <Card heading="Total Commits" value={totalCommits} />
      <Container>
        <Heading>Commits (Daywise)</Heading>
        <Bar
          options={options}
          datasetIdKey="CommitsDayWiseGraph"
          data={{
            labels: [...Object.keys(keyOne)],
            datasets: [
              {
                label: Label.Commits,
                borderColor: FillColor.CommitsColor,
                backgroundColor: FillColor.CommitsColor,
                data: Object.keys(keyOne).map((item) => {
                  return keyOne && item ? keyOne[item]?.count : null;
                }),
              },
            ],
          }}
        />
      </Container>
    </>
  );
};

export default CommitsDayWiseGraph;
