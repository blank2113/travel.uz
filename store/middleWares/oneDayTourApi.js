import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const oneDayTourApi = createApi({
    reducerPath: "oneDayTourApi",
    refetchOnFocus: true,
    tagTypes:['Tour'],
    baseQuery: fetchBaseQuery({baseUrl:'http://api.minzifatravel.com/api/v1/tours'}),
    endpoints: (builder) => ({
        getOneDayTourValues: builder.query({
            query: () => '?small_tours[eq]=1',
            providesTags:['Tour']
        })
    })
})

export const {useGetOneDayTourValuesQuery} = oneDayTourApi