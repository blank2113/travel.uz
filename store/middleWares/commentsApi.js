import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const commentsApi = createApi({
    reducerPath: "commentsApi",
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:8000/'}),
    endpoints: (builder) => ({
        getCommentsValues: builder.query({
            query: () => 'comments'
        })
    })
})

export const {useGetCommentsValuesQuery} = commentsApi