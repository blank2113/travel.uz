import { configureStore } from "@reduxjs/toolkit";
import authorizationReducer from "./slice/authorization";
import scrollReducer from "./slice/scroll";
import burgerReducer from "./slice/burgerSlice";
import countryStatusReducer from "./slice/countryStatus";
import tourStatusReducer from "./slice/tourStatus";
import { destinationsApi } from "./middleWares/destinationsApi";
import { tourApi } from "./middleWares/tourApi";
import { baseApi } from "./middlewares/baseApi";
import { popularTourApi } from "./middlewares/popularTourApi";
import { oneDayTourApi } from "./middlewares/oneDayTourApi";
import { seasonalTourApi } from "./middlewares/seasonalTourApi";
import { commentsApi } from "./middlewares/commentsApi";
import { teamApi} from "./middleWares/teamApi";
import { tourTypesApi } from "./middleWares/tourTypesApi";
import { newsApi } from "./middleWares/newsApi";
import { articlesApi } from "./middleWares/articlesApi";
import contactsReducer from "./slice/contacts";
import footerNavReducer from "./slice/footerNav";
import footerInfoReducer from "./slice/footerInfo";
import socialMediaReducer from "./slice/socialMedia";
import formReducer from "./slice/form";
import getFormValueReducer from "./slice/getFormValue";
import inputReducer from "./slice/input";
import cardIdReducer from "./slice/cardId";
import filterSliceReducer from "./slice/filterSlice";

export const store = configureStore({
    reducer:{
        [destinationsApi.reducerPath]: destinationsApi.reducer,
        [tourApi.reducerPath]: tourApi.reducer,
        [baseApi.reducerPath]: baseApi.reducer,
        [popularTourApi.reducerPath]: popularTourApi.reducer,
        [oneDayTourApi.reducerPath]: oneDayTourApi.reducer,
        [seasonalTourApi.reducerPath]: seasonalTourApi.reducer,
        [commentsApi.reducerPath]: commentsApi.reducer,
        [teamApi.reducerPath]: teamApi.reducer,
        [tourTypesApi.reducerPath]: tourTypesApi.reducer,
        [newsApi.reducerPath]: newsApi.reducer,
        [articlesApi.reducerPath]: articlesApi.reducer,
        authorization: authorizationReducer,
        scroll: scrollReducer,
        burger: burgerReducer,
        countryStatus: countryStatusReducer,
        tourStatus: tourStatusReducer,
        contacts: contactsReducer,
        footerNav: footerNavReducer,
        footerInfo: footerInfoReducer,
        socialMedia: socialMediaReducer,
        form: formReducer,
        getFormValue: getFormValueReducer,
        input: inputReducer,
        cardId: cardIdReducer,
        filterSlice: filterSliceReducer,
    },
    middleware: (getDefaultMiddleWare) => 
    getDefaultMiddleWare().concat([
        destinationsApi.middleware,
        tourApi.middleware,
        baseApi.middleware,
        popularTourApi.middleware,
        oneDayTourApi.middleware,
        seasonalTourApi.middleware,
        commentsApi.middleware,
        teamApi.middleware,
        tourTypesApi.middleware,
        newsApi.middleware,
        articlesApi.middleware,
    ])
})