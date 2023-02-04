import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    { id: 1, name: "Все туры", value: "all" },
    { id: 2, name: "Групповые туры в Узбекистан", value: "group" },
    { id: 3, name: "Индивидуальные туры в Узбекистан", value: "indv" },
    { id: 4, name: "Специальные предложения", value: "spec" },
    { id: 5, name: "Комбинированные туры в Узбекистан", value: "comb" },
    { id: 6, name: "Экскурсии в Узбекистан", value: "excurs" },
    { id: 7, name: "Культурные туры в Узбекистан", value: "cult" },
    { id: 8, name: "Авторские туры в Узбекистан", value: "autors" },
    { id: 9, name: "Туры на лето в Узбекистан", value: "summer_tours" },
    { id: 10, name: "Туры на весну в Узбекистан", value: "spring_tours" },
    { id: 11, name: "Туры на зиму в Узбекистан", value: "winter_tours" },
  ],
  itemValue: "Все туры",
  valueK: [ { id: 1, name: "Все туры", value: "all" },
  { id: 2, name: "Групповые туры в Узбекистан", value: "group" },
  { id: 3, name: "Комбинированные туры в Узбекистан", value: "comb" },
  {id:4, name: "Эко туры", value:"mice"},],
  itemValueK:"Все туры",
};

export const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    getItemValue: (state, action) => {
      state.itemValue = action.payload;
    },
    getItemValueK: (state, action) => {
      state.itemValueK = action.payload;
    }
  },
});

export const { getItemValue,getItemValueK } = filterSlice.actions;
export default filterSlice.reducer;
