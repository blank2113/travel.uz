import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const newsApi = createApi({
    reducerPath: "newsApi",
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({baseUrl:'http://api.minzifatravel.com/api/v1/'}),
    endpoints: (builder) => ({
        getNews: builder.query({
            query: () => 'articles?cat=7&limit=3'
        })
    })
})

export const {useGetNewsQuery} = newsApi;