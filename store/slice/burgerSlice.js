import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
}

export const burgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers:{
        getBurgerValues: (state,action) => {
            state.status = action.payload
        }
    }
})

export const {getBurgerValues} = burgerSlice.actions
export default burgerSlice.reducer