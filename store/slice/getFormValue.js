import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hotel: "Премиум класс",
  directions: "Узбекистан",
  persons: "Я один",
  country: "",
  name:"",
  email:"",
  phone:""
};

export const getFormValueSlice = createSlice({
  name: "getFormValue",
  initialState,
  reducers: {
    getHotelValue: (state, action) => {
      state.hotel = action.payload;
    },
    getDirectionValue: (state, action) => {
      state.directions = action.payload;
    },
    getPersonValue: (state, action) => {
      state.persons = action.payload;
    },
    getCountryValue: (state, action) => {
      state.country = action.payload;
    },
    getNameValue: (state, action) => {
      state.name = action.payload;
    },
    getEmailValue: (state, action) => {
      state.email = action.payload;
    },
    getPhoneValue: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const {
  getHotelValue,
  getDirectionValue,
  getPersonValue,
  getCountryValue,
  getNameValue,
  getEmailValue,
  getPhoneValue
} = getFormValueSlice.actions;
export default getFormValueSlice.reducer;
