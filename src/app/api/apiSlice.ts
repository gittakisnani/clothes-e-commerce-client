import{ createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const baseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API,
    credentials: 'include',
})


export const apiSlice = createApi({
    baseQuery,
    endpoints: builder => ({}),
    tagTypes: ['Users', 'Products']
})

