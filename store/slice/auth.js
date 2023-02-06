import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    auto:false,
    registr:false,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        getAutoValue: (state,action)=>{
            state.auto = action.payload
        },
        getRegistrValue: (state,action)=>{
            state.registr = action.payload
        }
    }
})

export const {getAutoValue,getRegistrValue} = authSlice.actions
export default authSlice.reducer