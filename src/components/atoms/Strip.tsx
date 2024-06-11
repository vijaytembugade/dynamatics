import styled from "styled-components";
import { FillColor } from "../../types";
import { Text } from "../typography/Text";
import { memo } from "react";

const Strip = styled.div`
  background-color: var(--bgColor);
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: ${FillColor.IncidentsResolvedColor};
  font-size: 1rem;
  flex-grow: 1;
`;
type PropsType = {
  text: string;
  value: number;
};

const StripComponent = (props: PropsType) => {
  const { text, value } = props;
  return (
    <Strip>
      <Text>
        {text} : {value}
      </Text>
    </Strip>
  );
};

export default memo(StripComponent);
