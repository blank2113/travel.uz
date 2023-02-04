import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:[{id:1, link: "tel:+79012562347",name: "+7(901)256-23-47"},
    {id:2, link: "https://wa.me/998907121107", name:"Whatsapp"},
    {id:3, link: "https://t.me/travel_expert_minzifa", name:"Telegram"},
    {id:4, link: "mailto:travel@minzifatravel.com", name:"travel@minzifatravel.com"}]
}

export const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers:{
        addContacts:(state,action)=>{
            state.value = {...state.phone,...action.payload}
        }
    }
})

export const {addContacts} = contactsSlice.actions
export default contactsSlice.reducer