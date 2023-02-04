import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const popularTourApi = createApi({
    reducerPath: "popularTourApi",
    refetchOnFocus: true,
    tagTypes:['tour'],
    baseQuery: fetchBaseQuery({baseUrl:'http://api.minzifatravel.com/api/v1/tours'}),
    endpoints: (builder) => ({
        getPopularTourValues: builder.query({
            query: () => '?popular[eq]=1',
            providesTags:['tour']
        })
    })
})

export const {useGetPopularTourValuesQuery} = popularTourApi