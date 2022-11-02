import{ createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://e-commerce-clothes-server.onrender.com',
    credentials: 'include',
})


export const apiSlice = createApi({
    baseQuery,
    endpoints: builder => ({}),
    tagTypes: ['Users', 'Products']
})

