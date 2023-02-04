import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    auth:["Авторизация","Регистрация"],
    currency: ["сум", "руб","дол"]
}

export const authorizationSlice = createSlice({
    name: "authorization",
    initialState
})

export default authorizationSlice.reducer