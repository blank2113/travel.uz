import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const scrollSlice = createSlice({
    name: "scrollSlice",
    initialState,
    reducers:{
        getScrollAction: (state,action) =>{
            state.value=  action.payload
        }
    }
})

export const {getScrollAction} = scrollSlice.actions
export default scrollSlice.reducer