import styled from "styled-components";
import { Heading } from "../typography/Heading";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
`;

const StepLabel = styled.div`
  font-size: 16px;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #ccc;
  margin-top: 10px;
`;

const Stepper = ({ heading }) => {
  const steps = [{ label: "User 1" }, { label: "User 2" }, { label: "User 3" }];

  return (
    <Container>
      <Heading>{heading} </Heading>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepNumber>{index + 1}</StepNumber>
          <StepLabel>{step.label}</StepLabel>
          {index < steps.length - 1}
        </Step>
      ))}
    </Container>
  );
};

export default Stepper;
