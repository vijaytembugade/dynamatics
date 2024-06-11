import { Chart } from "chart.js";
import { Line } from "react-chartjs-2";

import {
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
const InsidentAlertVSResolvedGraph = () => {
  const [IncidentAlertsObj, IncidentsResolvedObj] =
    useTwoValueDayWiseCompareData(
      Label.IncidentAlerts,
      Label.IncidentsResolved
    );

  return (
    <Container>
      <Heading>
        Total Insident Alert vs Total Insident Resolved (Daywise)
      </Heading>
      <Line
        options={options}
        datasetIdKey="InsidentAlertVSResolvedGraph"
        data={{
          labels: [...Object.keys(IncidentAlertsObj)],
          datasets: [
            {
              label: Label.IncidentAlerts,
              borderColor: FillColor.IncidentAlertsColor,
              backgroundColor: FillColor.IncidentAlertsColor,
              data: Object.keys(IncidentAlertsObj).map(
                (item: keyof typeof IncidentAlertsObj) => {
                  return IncidentAlertsObj[item]?.count;
                }
              ),
            },
            {
              label: "Insident Resolved",
              data: Object.keys(IncidentsResolvedObj).map(
                (item: keyof typeof IncidentsResolvedObj) => {
                  return IncidentsResolvedObj[item]?.count;
                }
              ),
              borderColor: FillColor.IncidentsResolvedColor,
              backgroundColor: FillColor.IncidentsResolvedColor,
            },
          ],
        }}
      />
    </Container>
  );
};

export default InsidentAlertVSResolvedGraph;
