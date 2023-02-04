import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "3750",
  days: "11",
  countries: [
    "Узбекистан",
    "Казахстан",
    "Таджикистан",
    "Кыргызстан",
    "Туркменистан",
  ],
  countryValue: "Узбекистан",
  types: [{id:1, name: "Групповые туры", value:"group"},
  {id:2, name: "Индивидуальные туры", value:"indv"},
  {id:3, name: "Специальные предложения", value:"spec"},
  {id:4, name: "Комбинированные туры", value:"comb"},
  {id:5, name: "Экскурсии", value:"excurs"},
  {id:6, name: "Культурные туры", value:"cult"},
  {id:7, name: "Туры в Самарканд", value:"samarkand"},
  {id:8, name: "Туры в Узбекистан из Москвы", value:"moskva"},
  {id:9, name: "Авторские туры", value:"autors"},
  {id:10, name: "Туры в Узбекистан на весь год", value:"all_year_tours"},
  {id:11, name: "Короткие туры", value:"short_tours"},
  {id:12, name: "Экскурсионные туры", value:"excursion_tours"},
  {id:13, name: "Туры по специальным ценам", value:"specials"},
  {id:14, name: "Туры на лето", value:"summer_tours"},
  {id:15, name: "Туры на осень", value:"autumn_tours"},
  {id:16, name: "Туры на весну", value:"spring_tours"},
  {id:17, name: "Туры на зиму", value:"winter_tours"},
  {id:17, name: "Эко туры", value:"mice"},
  {id:17, name: "MICE туры", value:"eco_tours"}],
  typeValue: "group",
};

export const inputSlice = createSlice({
  name: "inputSlice",
  initialState,
  reducers: {
    getInputValue: (state, action) => {
      state.value = action.payload;
    },
    getDaysValue: (state, action) => {
      state.days = action.payload;
    },
    getCountryValue: (state, action) => {
      state.countryValue = action.payload;
    },
    getTypeValue: (state, action) => {
      state.typeValue = action.payload;
    },
  },
});

export const { getInputValue, getDaysValue, getCountryValue, getTypeValue } =
  inputSlice.actions;
export default inputSlice.reducer;
