import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'


const initialState = {
  products:[],
  productPage:[],
  status:'',
  errorMsg:''
}

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-API-KEY': process.env.REACT_APP_API_KEY
  }
};


export const fetchProducts = createAsyncThunk('products/fetchProducts', async()=>{
  try{
    const res = await fetch('https://api.chimoney.io/v0.2/info/assets', options)
    const {data} = await res.json()
    return data.giftCardsRLD
  }catch(err){
    return err.message
  }
})

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
  },extraReducers(builder){
    builder
    .addCase(fetchProducts.pending,(state,action)=>{
      state.status = 'loading'
    })
    .addCase(fetchProducts.fulfilled,(state,action)=>{
      state.status = 'success'
      state.products = action.payload
    })
    .addCase(fetchProducts.rejected,(state,action)=>{
      state.status = 'failed'
      state.errorMsg = action.payload
    })
  }
})




// Action creators are generated for each case reducer function
export const { getProductPage} = productSlice.actions

export default productSlice.reducer