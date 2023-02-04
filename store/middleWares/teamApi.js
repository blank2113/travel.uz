import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const teamApi = createApi({
    reducerPath: "teamApi",
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({baseUrl:'http://api.minzifatravel.com/api/v1/'}),
    endpoints:(builder)=>({
        getTeamMembers: builder.query({
            query: () => "team"
        })
    })
}) 

export const {useGetTeamMembersQuery} = teamApi;