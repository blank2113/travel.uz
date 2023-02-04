import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:[{id:1,link:"https://twitter.com/MinzifaTravelRu"},
    {id:2,link:"https://www.instagram.com/minzifa_travel/"},
    {id:3,link:"https://www.instagram.com/minzifa_travel/"},
    {id:4,link:"https://vk.com/minzifa_travel"},
    {id:5,link:"https://ok.ru/minzifatravel1?st._aid=GroupTopicLayer_VisitProfile"},
    {id:6,link:"https://www.pinterest.com/minzifa_travel/"},
    {id:7,link:"https://www.youtube.com/channel/UCsmgPe3MN4G4IYetsU405oA/featured"}]
}

export const socialMediaSlice = createSlice({
    name:"socialMedia",
    initialState,
    reducers: {
        addSocialMediaValues: (state,action)=>{
            state.value = [...state.value, ...action.payload]
        }
    }
})

export const {addSocialMediaValues} = socialMediaSlice.actions
export default socialMediaSlice.reducer