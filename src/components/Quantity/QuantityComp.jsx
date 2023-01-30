import React from "react";

import {
  QuantityContainer,
  QuantityButton,
  QuantityNumber,
} from "./QuantityComp.styled";

const QuantityComp = ({ quantity, quantityFunc }) => {
  return (
    <QuantityContainer>
      <QuantityButton onClick={() => quantityFunc("-")}>-</QuantityButton>
      <QuantityNumber>{quantity}</QuantityNumber>
      <QuantityButton onClick={() => quantityFunc("+")}>+</QuantityButton>
    </QuantityContainer>
  );
};

export default QuantityComp;
