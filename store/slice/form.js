import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hotel: ["Премиум класс", "Бизнес класс", "Бутик отели", "Бронирую сам"],
  daysForm: 1,
  calendar: "",
  direction: [
    "Узбекистан",
    "Казахстан",
    "Таджикистан",
    "Кыргызстан",
    "Туркменистан",
  ],
  text: "",
  persons: ["Я один", "Нас двое", "Семья", "Группа"],
  familyPerson: 2,
  country: "",
  name: "",
  email: "",
  phone: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addDaysValue: (state) => {
      state.daysForm = ++state.daysForm;
    },
    minusDaysValue: (state) => {
      if (state.daysForm <= 1) {
        state.daysForm = 1;
      } else {
        state.daysForm = --state.daysForm;
      }
    },
    addFamilyPersonValue: (state) => {
      state.familyPerson = ++state.familyPerson;
    },
    minusFamilyValue: (state) => {
      if (state.familyPerson <= 1) {
        state.familyPerson = 1;
      } else {
        state.familyPerson = --state.familyPerson;
      }
    },
    getCalendarValue: (state, action) => {
      state.calendar = action.payload;
    },
  },
});

export const {
  addDaysValue,
  minusDaysValue,
  getCalendarValue,
  addFamilyPersonValue,
  minusFamilyValue,
} = formSlice.actions;
export default formSlice.reducer;
