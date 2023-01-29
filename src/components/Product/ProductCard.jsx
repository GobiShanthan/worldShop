import React from "react";

import {
  ProductCardContainer,
  ProductInfoContainer,
  ProductButton,
  ProductTitle
} from "./Product.styled";

const Product = ({ info }) => {

  return (
    <ProductCardContainer img={info.img}>
      <ProductInfoContainer>
      <ProductTitle>{info.name}</ProductTitle>
      <p>{info.description}</p>
      <p>
        {info.fixedRecipientDenominations[0]?`${info.recipientCurrencyCode} $${info.fixedRecipientDenominations[0].toFixed(2)}`:'Price N/A'}
      </p>
      <p>
        <ProductButton>Add to Cart</ProductButton>
      </p>
      </ProductInfoContainer>

    </ProductCardContainer>
  );
};

export default Product;
