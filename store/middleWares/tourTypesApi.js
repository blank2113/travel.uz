import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const tourTypesApi = createApi({
    reducerPath: "tourTypesApi",
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({baseUrl:'http://api.minzifatravel.com/api/v1/'}),
    endpoints: (builder) => ({
        getTourTypes: builder.query({
            query: (limit ='') => `tourType?${limit && `_limit=${limit}`}`,
        })
    })
})

export const {useGetTourTypesQuery} = tourTypesApi;