import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => (props.bg ? props.bg : "white")};
  font-size: 18px;
  padding: 7px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default Button;
