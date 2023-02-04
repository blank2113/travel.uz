import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value:[{id:1,link:"/news",name:"Последние новости"},
    {id:2,link:"/blog",name:"Наш блог"},
    {id:3,link:"/reserve_rules_tour",name:"Правила Бронирования Туров"},
    {id:4,link:"/rules_of_reservation",name:"Правила Бронирования Гостиниц"},
    {id:5,link:"/oyal_program",name:"Программа лояльности"},
    {id:7,link:"/rules",name:"Таможенные правила"},]
}

export const footerInfoSlice = createSlice({
    name:"footerInfo",
    initialState
})

export default footerInfoSlice.reducer