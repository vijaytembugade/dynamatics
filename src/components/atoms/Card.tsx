import styled from "styled-components";
import { Heading } from "../typography/Heading";
import IconLink from "../../assets/LinkIcon";
import { memo } from "react";

const Card = styled.div`
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  flex-grow: 1;
  max-width: 250px;
`;

const Count = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primaryColor);
`;

const HeadingWithLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

type PropTypes = {
  heading: string;
  value: number;
};
const CardComponent = ({ heading, value }: PropTypes) => (
  <Card>
    <HeadingWithLink>
      <Heading>{heading}</Heading>
      <IconLink width={"0.8rem"} height={"0.9rem"} />
    </HeadingWithLink>
    <Count>{value}</Count>
  </Card>
);

export default memo(CardComponent);
