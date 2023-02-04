import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const tourApi = createApi({
    reducerPath: "tourApi",
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({baseUrl:'http://api.minzifatravel.com/api/v1/'}),
    endpoints: (builder) => ({
        getToursValues: builder.query({
            query: () => 'tours'
        })
    })
})

export const {useGetToursValuesQuery} = tourApi