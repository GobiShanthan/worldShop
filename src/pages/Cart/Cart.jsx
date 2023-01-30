import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
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
  Label
} from './Cart.styled'

import {addToCart,deleteFromCart} from '../../redux/slice/cartSlice'




const Cart = () => {
  const dispatch = useDispatch()

  const cartData = useSelector((state)=>state.cartData)
  const {cart} = cartData


  //TOTAL PRICE 
  const totalPrice = cart.reduce((total,item)=>{
    return total + (item.quantity * (item.maxRecipientDenomination ?item.maxRecipientDenomination :100 ) )
  },0)

  
  
  //ADD TO CART
  const addToCartFunc = (e,itemInfo) => {
    //Make new copy of object
    let newObj = Object.assign({}, itemInfo);

    //change quantity value of object
    newObj.quantity = Number(e.target.value)

    //dispatch to addToCart
    dispatch(addToCart(newObj));

  };


  return (
    <CartContainer>
      {cart ?<>
      <CartTitleContainer>
        <CartTitle>SHOPPING CART</CartTitle>
      </CartTitleContainer>
      <hr/>
      <CartItemsContainer>
        {cart ?
        cart.map((c)=>(
        <CartItem>
        <CartPic src={c.img} alt={c.productName}/>
        <CartInfo>
          <CartItemTitle>{c.productName}</CartItemTitle>
          <CartItemCenter>
            <Label> Quantity </Label>
          <CartItemSelect  onChange={(e)=>addToCartFunc(e,c)} defaultValue={c.quantity}>
            {[...Array(20)].map((e,num)=>(<option key={num+1} value={num+1} >{num+1}</option>))}
          </CartItemSelect>
          </CartItemCenter>
          <CartItemCenter>
          <RemoveButton onClick={()=>dispatch(deleteFromCart(c.productId))}>Remove</RemoveButton>
          </CartItemCenter>
        </CartInfo>
        <CartPrice> ${c.maxRecipientDenomination
    ? (c.maxRecipientDenomination * c.quantity).toFixed(2)
    : (100 * c.quantity).toFixed(2)}</CartPrice>
        </CartItem>
        )):'loading'
        }
        
      </CartItemsContainer>
      <hr/>
      <CartSubTotal>
        total ${totalPrice}
      </CartSubTotal></>:
      <h1>loading......</h1>
      }
      
    </CartContainer>
  )
}

export default Cart