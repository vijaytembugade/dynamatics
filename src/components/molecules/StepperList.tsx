import styled from "styled-components";
import { Heading } from "../typography/Heading";
import { memo } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 1px;
  flex-grow: 1;
  border-radius: 0.4rem;
  max-height: 250px;
  overflow-y: auto;
  width: 130px;
  min-width: 120px;
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const StepNumber = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-right: 10px;
`;

const StepLabel = styled.div`
  font-size: 0.9rem;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #ccc;
  margin-top: 10px;
`;

type PropTypes = {
  heading: string;
  steps?: {
    value: string;
    count: number;
  }[];
};

const Stepper = ({ heading, steps }: PropTypes) => {
  return (
    <Container>
      <Heading>{heading} </Heading>
      {steps &&
        steps.map((step, index) => (
          <Step key={step.value}>
            <StepNumber>{index + 1}.</StepNumber>
            <StepLabel>{step?.value}</StepLabel>
            {index < steps.length - 1}
          </Step>
        ))}
    </Container>
  );
};

export default memo(Stepper);
