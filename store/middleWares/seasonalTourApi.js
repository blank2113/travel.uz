import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const seasonalTourApi = createApi({
    reducerPath: "seasonalTourApi",
    refetchOnFocus: true,
    tagTypes:['tour'],
    baseQuery: fetchBaseQuery({baseUrl:'http://api.minzifatravel.com/api/v1/tours'}),
    endpoints: (builder) => ({
        getSeasonalTourValues: builder.query({
            query: () => '?season[eq]=1',
            providesTags: ['tour']
        })
    })
})

export const {useGetSeasonalTourValuesQuery} = seasonalTourApi