import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const articlesApi = createApi({
    reducerPath: "articlesApi",
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({baseUrl:'http://api.minzifatravel.com/api/v1/'}),
    endpoints: (builder) => ({
        getArticles: builder.query({
            query: (num) => `articles?cat=${num}&limit=3`
        })
    })
})

export const {useGetArticlesQuery} = articlesApi;