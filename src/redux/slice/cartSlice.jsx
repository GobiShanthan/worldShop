import { createSlice ,current} from '@reduxjs/toolkit'

const cartItems = localStorage.getItem('cart') !== null ? JSON.parse(localStorage.getItem('cart')):[]

const initialState = {
  cart:cartItems
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action) => {
      const matchId = state.cart.findIndex(item => item.productId === action.payload.productId)
      if(matchId !== -1){
        state.cart[matchId].quantity = action.payload.quantity 
      }else {
        state.cart.push(action.payload)
      }
      localStorage.setItem('cart',JSON.stringify(state.cart.map(item=>item)))

    },
    deleteFromCart:(state,action)=>{
      state.cart.splice(state.cart.findIndex((item) => item.productId === action.payload.productId), 1);
      localStorage.setItem('cart',JSON.stringify(state.cart.map(item=>item)))
    }
  }

})



// Action creators are generated for each case reducer function
export const {addToCart,deleteFromCart} = cartSlice.actions

export default cartSlice.reducer