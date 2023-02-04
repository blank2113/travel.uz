import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : ""
}

export const cardIdSlice = createSlice({
    name: "cardIdSlice",
    initialState,
    reducers:{
        getCardId: (state,action) =>{
            state.value = action.payload
        }
    }
})

export const {getCardId} = cardIdSlice.actions
export default cardIdSlice.reducer
