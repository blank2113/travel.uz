import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const baseApi = createApi({
    reducerPath:'baseApi',
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:8000'}),
    endpoints:(builder) => ({
        getValues: builder.query({
            query: (name) => `/${name}`
        }),
      
    })
})
export const {useGetValuesQuery} = baseApi;