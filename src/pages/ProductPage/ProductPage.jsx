import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import QuantityComp from "../../components/Quantity/QuantityComp";
import Toast from '../../components/Toast/Toast'

import {
  ProductPageWrapper,
  ProductPageContainer,
  PagePic,
  PageInfo,
  PagePrice,
  AddToCartButton,
  PageTitle,
  PageTotalPrice,
  Desc
} from "./ProductPage.styled";

//REDUX IMPORTS
import { fetchProducts } from "../../redux/slice/productsSlice";
import { addToToast} from "../../redux/slice/toastSlice";
import { addToCart} from "../../redux/slice/cartSlice";
import Loader from "../../components/Loader/Loader";

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

  const sendToast =()=>{
    dispatch(addToToast({msg:`${pageData.productName} added to Cart`,success:true}))
  }

  const sendCartItem = ()=>{
    const newObj = Object.assign({ quantity }, pageData);
      dispatch(addToCart(newObj))
  }

  //ADD TO CART
  const addToCartFunc =() => {
    sendToast()
    sendCartItem()
  };





  
  return (
    <ProductPageWrapper>

      <Toast />
      {pageData.img ?<ProductPageContainer>
        <PagePic src={pageData.img} alt={pageData.productName} />
        <PageInfo>
          <PageTitle>{pageData.productName}</PageTitle>
          <PagePrice>
            <span>Price:</span> ${price}
          </PagePrice>
          <Desc>{pageData.description}</Desc>
          <QuantityComp quantity={quantity} quantityFunc={quantityFunc} />
          <PageTotalPrice>TOTAL: ${(price * quantity).toFixed(2)}</PageTotalPrice>
          <AddToCartButton onClick={addToCartFunc}>ADD TO CART</AddToCartButton>
          
        </PageInfo>
      </ProductPageContainer>:<Loader/>}
      
    </ProductPageWrapper>
  );
};

export default ProductPage;
