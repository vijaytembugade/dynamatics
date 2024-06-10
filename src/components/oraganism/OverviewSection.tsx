import React from "react";
import CardComponent from "../atoms/Card";
import styled from "styled-components";
import StripComponent from "../atoms/Strip";
import Stepper from "../molecules/StepperList";
import InsidentAlertVSResolvedGraph from "../molecules/InsidentAlertVSResolvedGraph";
import PROpenedVsPRMergedGraphDayWise from "../molecules/PROpenedVsPRMergedGraphDayWise";
import useGetTotalCount from "../../hooks/useGetTotalCount";
import { Label } from "../../types";
import useCalculateTop from "../../hooks/useCalculateTop";
import CommitsDayWiseGraph from "../molecules/CommitsDayWiseGraph";

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

  const topPrReviewed = useCalculateTop(Label.PRReviewed);
  const topPrCommenters = useCalculateTop(Label.PRComments);
  const topIncidentResolver = useCalculateTop(Label.IncidentsResolved);

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
        <PROpenedVsPRMergedGraphDayWise />
      </FlexDiv>
      <FlexDiv>
        <Stepper steps={topPrReviewed} heading="Top PR reviewer" />
        <Stepper steps={topPrCommenters} heading="Top PR Commenters" />
        <Stepper steps={topIncidentResolver} heading="Top Incident Resolver" />
      </FlexDiv>
      <FlexDiv>
        <StripComponent
          text="Total Incident resolved"
          value={totalIncidentResolved}
        />
        <InsidentAlertVSResolvedGraph />
        <CommitsDayWiseGraph />
      </FlexDiv>
    </FlexVDiv>
  );
};

export default OverviewSection;
