import React from "react";
import {Link} from 'react-router-dom'

//STYLED COMPONENTS IMPORTS
import {
  ProductCardContainer,
  ProductInfoContainer,
  ProductButton,
  ProductTitle
} from "./Product.styled";

//REDUX IMPORTS
import {addToCart} from '../../redux/slice/cartSlice'



const Product = ({ info }) => {
  return (
    <Link to={`/products/${info.productId}`}>
    <ProductCardContainer img={info.img}>
      <ProductInfoContainer>
      <ProductTitle>{info.name}</ProductTitle>
      <p>{info.description}</p>
      <p>
        {info.fixedRecipientDenominations[0]?`${info.recipientCurrencyCode} $${info.fixedRecipientDenominations[0].toFixed(2)}`:'Price N/A'}
      </p>
      </ProductInfoContainer>
    </ProductCardContainer>
    </Link>
  );
};

export default Product;
