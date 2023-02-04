import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
}

export const tourStatusSlice = createSlice({
    name:"tourStatus",
    initialState,
    reducers:{
        getTourStatus: (state,action) =>{
            state.value= action.payload
        }
    }
})

export const {getTourStatus} = tourStatusSlice.actions
export default tourStatusSlice.reducer
