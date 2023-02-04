import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value:[{id:1,link:"/about",name:"О нас"},
    {id:2,link:"/contacts",name:"Наши контакты"},
    {id:3,link:"/comments",name:"Отзывы туристов"},
    {id:4,link:"/tours",name:"Туры по странам"},
    {id:5,link:"/type",name:"Туры по типу"},]
}

export const footerNavSlice = createSlice({
    name: "footerNav",
    initialState
})

export default footerNavSlice.reducer