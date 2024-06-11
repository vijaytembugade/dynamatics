import { memo } from "react";
import styled from "styled-components";

interface Props {
  bg?: string;
}

const Button = styled.button<Props>`
  background-color: ${(props) => (props.bg ? props.bg : "white")};
  font-size: 18px;
  padding: 7px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
export default memo(Button);
