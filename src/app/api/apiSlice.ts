import{ createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:1337',
    credentials: 'include',
})


export const apiSlice = createApi({
    baseQuery,
    endpoints: builder => ({}),
    tagTypes: ['User', 'Product']
})

