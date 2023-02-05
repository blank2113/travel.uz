import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value:[{id:1,link:"/about",name:"О нас"},
    {id:2,link:"/contacts",name:"Наши контакты"},
    {id:3,link:"/review",name:"Отзывы туристов"},
    {id:4,link:"/country",name:"Туры по странам"},
    {id:5,link:"/tour",name:"Туры по типу"},]
}

export const footerNavSlice = createSlice({
    name: "footerNav",
    initialState
})

export default footerNavSlice.reducer