import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
}

export const countryStatusSlice = createSlice({
    name:"countryStatus",
    initialState,
    reducers:{
        getCountryStatus: (state,action) =>{
            state.value= action.payload
        }
    }
})

export const {getCountryStatus} = countryStatusSlice.actions
export default countryStatusSlice.reducer
