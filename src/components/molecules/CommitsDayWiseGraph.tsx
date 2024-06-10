import { Chart } from "chart.js";
import { Bar, Line } from "react-chartjs-2";

import {
  CategoryScale,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  BarElement,
} from "chart.js";
import styled from "styled-components";
import { Heading } from "../typography/Heading";

import useTwoValueDayWiseCompareData from "../../hooks/useTwoValueDayWiseCompareData";
import { FillColor, Label } from "../../types";
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
const CommitsDayWiseGraph = (props: Props) => {
  const [keyOne] = useTwoValueDayWiseCompareData(Label.Commits, Label.PROpen);
  console.log(keyOne);

  return (
    <Container>
      <Heading>Commits (Daywise)</Heading>
      <Bar
        options={options}
        datasetIdKey="CommitsDayWiseGraph"
        data={{
          labels: [...Object.keys(keyOne)],
          datasets: [
            {
              id: 1,
              label: Label.Commits,
              borderColor: FillColor.CommitsColor,
              backgroundColor: FillColor.CommitsColor,
              data: Object.keys(keyOne).map((item: keyof typeof keyOne) => {
                return keyOne[item]?.count;
              }),
            },
          ],
        }}
      />
    </Container>
  );
};

export default CommitsDayWiseGraph;