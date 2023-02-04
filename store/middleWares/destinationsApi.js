import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const destinationsApi = createApi({
    reducerPath: "destinationsApi",
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({baseUrl:'http://api.minzifatravel.com/api/v1/'}),
    endpoints: (builder) => ({
        getDestinations: builder.query({
            query: () => 'destinations'
        })
    })
})

export const {useGetDestinationsQuery} = destinationsApi;