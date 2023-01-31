import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'

import {
  CartContainer,
  CartTitleContainer,
  CartItemsContainer,
  CartSubTotal,
  CartTitle,
  CartPic,
  CartInfo,
  CartPrice,
  CartItem,
  CartItemTitle,
  CartItemCenter,
  CartItemSelect,
  RemoveButton,
  Label,
  CartSubWrapper,
  CheckoutButton
} from "./Cart.styled";

import { addToCart, deleteFromCart,checkout } from "../../redux/slice/cartSlice";
import { addToToast} from "../../redux/slice/toastSlice";
import Toast from "../../components/Toast/Toast";
import Loader from "../../components/Loader/Loader";

const Cart = () => {
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.cartData);
  const { cart } = cartData;

  //TOTAL PRICE
  const totalPrice = cart.reduce((total, item) => {
    return (
      total +
      item.quantity *
        (item.maxRecipientDenomination ? item.maxRecipientDenomination : 100)
    );
  }, 0);

  //TOTAL Amount
  const totalAmount = cart.reduce((total, item) => {
    return (
      total + item.quantity
       
    );
  }, 0);





  const sendToast = (msg,success) => {
    dispatch(
      addToToast({
        msg:msg,
        success
      })
    );
  };

  //ADD ITEM TO CART
  const sendCartItem = (e, itemInfo) => {
    //Make new copy of object
    let newObj = Object.assign({}, itemInfo);

    //change quantity value of object
    newObj.quantity = Number(e.target.value);

    //dispatch to addToCart
    dispatch(addToCart(newObj));
  };

  //DISPATCH TO CART ITEMS
  const addToCartFunc = (e, itemInfo) => {
    sendCartItem(e, itemInfo);
    sendToast(`${itemInfo.productName} quantity changed to ${e.target.value}`,true);
  };

  //DELETE FROM CART
  const deleteFromCartFunc =(itemInfo)=>{
    dispatch(deleteFromCart(itemInfo.productId))
    sendToast(`${itemInfo.productName} removed from cart`,false)
  }


  //CHECKOUT FUNC
  const checkoutFunc=()=>{
    dispatch(checkout())
  }



  return (
    <CartContainer>
      <Toast />
      {cart ? (
        <>
          <CartTitleContainer>
            <CartTitle>SHOPPING CART</CartTitle>
            
          </CartTitleContainer>
          
          <CartItemsContainer>
            {cart.length > 0
              ? cart.map((c) => (
                  <CartItem>
                    <CartPic src={c.img} alt={c.productName} />
                    <CartInfo>
                      <CartItemTitle>{c.productName}</CartItemTitle>
                      
                      <CartItemCenter>
                        <Label> Quantity </Label>
                        <CartItemSelect
                          onChange={(e) => addToCartFunc(e, c)}
                          defaultValue={c.quantity}
                        >
                          {[...Array(20)].map((e, num) => (
                            <option key={num + 1} value={num + 1}>
                              {num + 1}
                            </option>
                          ))}
                        </CartItemSelect>
                      </CartItemCenter>
                      <CartItemCenter>
                        <RemoveButton
                          onClick={() => deleteFromCartFunc(c)}
                        >
                          Remove
                        </RemoveButton>
                      </CartItemCenter>
                    </CartInfo>
      
                    <CartPrice>
                      {" "}
                      $
                      {c.maxRecipientDenomination
                        ? (c.maxRecipientDenomination * c.quantity).toFixed(2)
                        : (100 * c.quantity).toFixed(2)}
                    </CartPrice>
                  </CartItem>
                ))
              : <h1>Cart is Empty</h1>}
          </CartItemsContainer>

          <CartSubTotal>
            <CartSubWrapper>
                  <div>TOTAL: ({totalAmount})</div>
                  <div>${totalPrice.toFixed(2)}</div>
            </CartSubWrapper>
            <hr style={{width:'100%'}}/>
            <CartSubWrapper>
              <CheckoutButton onClick={()=>checkoutFunc()}><Link style={{color:'white',textDecoration:'none'}} to='/checkout'>CHECKOUT</Link></CheckoutButton>
            </CartSubWrapper>
           

          </CartSubTotal>
        </>
      ) : (
        <Loader/>
      )}
  
    </CartContainer>
  );
};

export default Cart;
