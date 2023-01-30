import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import QuantityComp from "../../components/Quantity/QuantityComp";

import {
  ProductPageWrapper,
  ProductPageContainer,
  PagePic,
  PageInfo,
  PagePrice,
  AddToCartButton,
  PageTitle,
  PageTotalPrice,
} from "./ProductPage.styled";

//REDUX IMPORTS
import { fetchProducts } from "../../redux/slice/productsSlice";
import { addToCart, deleteFromCart } from "../../redux/slice/cartSlice";

const ProductPage = () => {
  const [pageData, setPageData] = useState({});
  const [quantity, setQuantity] = useState(1);

  //PRODUCT PARAMS
  const { productId } = useParams();

  //DISPATCH
  const dispatch = useDispatch();

  //PRODUCTS DATA
  const productsData = useSelector((state) => state.productsData);
  const { products } = productsData;

  //PRICE
  const price = pageData && pageData.maxRecipientDenomination
    ? pageData.maxRecipientDenomination.toFixed(2)
    : 100.0;

  //FETCH PRODUCTS, IF PRODUCTS IS MISSING
  useEffect(() => {
    if (!products.content) {
      dispatch(fetchProducts());
      setPageData("loading");
    } else {
      const idMatch = products.content.find(
        (p) => p.productId === Number(productId)
      );
      setPageData(idMatch);
    }
  }, [products, dispatch, productId]);

  //CHANGE QUANTITY FUNCTION
  const quantityFunc = (val) => {
    if (val === "-") {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    } else {
      if (quantity < 20) {
        setQuantity(quantity + 1);
      }
    }
  };
  //ADD TO CART
  const addToCartFunc = () => {
    const newObj = Object.assign({ quantity }, pageData);
    dispatch(addToCart(newObj));
  };
  
  return (
    <ProductPageWrapper>
      {pageData ?<ProductPageContainer>

        <PagePic src={pageData.img} alt={pageData.productName} />
        <PageInfo>
          <PageTitle>{pageData.productName}</PageTitle>
          <PagePrice>
            <span>Price:</span> ${price}
          </PagePrice>
          <p>{pageData.description}</p>
          <QuantityComp quantity={quantity} quantityFunc={quantityFunc} />
          <PageTotalPrice>TOTAL: ${(price * quantity).toFixed(2)}</PageTotalPrice>
          <AddToCartButton onClick={addToCartFunc}>ADD TO CART</AddToCartButton>
        </PageInfo>
      </ProductPageContainer>:<h1>loading........</h1>}
      
    </ProductPageWrapper>
  );
};

export default ProductPage;
