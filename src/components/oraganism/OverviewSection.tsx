import React from "react";
import CardComponent from "../atoms/Card";
import styled from "styled-components";
import StripComponent from "../atoms/Strip";
import Stepper from "../molecules/StepperList";
import InsidentAlertVSResolvedGraph from "../molecules/InsidentAlertVSResolvedGraph";
import PROpenedVsPRMergedGraphDayWise from "../molecules/PROpenedVsPRMergedGraphDayWise";
import useGetTotalCount from "../../hooks/useGetTotalCount";
import { Label } from "../../types";

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
`;

const FlexVDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;
`;

const OverviewSection = () => {
  const totalOpenPr = useGetTotalCount(Label.PROpen);
  const totalRRReviewed = useGetTotalCount(Label.PRReviewed);
  const totalMergedPr = useGetTotalCount(Label.PRMerged);
  const totalIncidentResolved = useGetTotalCount(Label.IncidentsResolved);

  return (
    <FlexVDiv>
      <FlexDiv>
        <CardComponent value={totalMergedPr} heading={"Total Merged PRs"} />
        <CardComponent value={totalOpenPr} heading={"Total Open PRs"} />
        <CardComponent
          value={totalRRReviewed}
          heading={"Total Reviewed PRs "}
        />
      </FlexDiv>
      <FlexDiv>
        <StripComponent
          text="Total Incident resolved"
          value={totalIncidentResolved}
        />
      </FlexDiv>
      <FlexDiv>
        <Stepper heading="Top 3 PR reviewer" />
        <Stepper heading="Top 3 PR Merger" />
        <Stepper heading="Top 3 Incident Resolver" />
      </FlexDiv>
      <FlexDiv>
        <InsidentAlertVSResolvedGraph />
        <PROpenedVsPRMergedGraphDayWise />
      </FlexDiv>
    </FlexVDiv>
  );
};

export default OverviewSection;
