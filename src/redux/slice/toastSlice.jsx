import { createSlice} from '@reduxjs/toolkit'



const initialState = {
  toastMsgs:[]
}

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    addToToast: (state,action) => {
        state.toastMsgs.push(action.payload)
    },
    deleteFromToast:(state,action)=>{
      state.toastMsgs.shift()
    }
  }

})



// Action creators are generated for each case reducer function
export const {addToToast,deleteFromToast} = toastSlice.actions

export default toastSlice.reducer