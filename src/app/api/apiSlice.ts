import{ createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials } from '../../feature/authSlice'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:1337',
    credentials: 'include',
    // prepareHeaders: (headers, { getState }) => {
    //     //@ts-ignore
    //     const tokens = getState().auth;
    //     headers.set('authorization', `Bearer ${tokens.token}`);
    //     if(tokens.refresh) {
    //         headers.set('x-refresh', tokens.refresh)
    //     }

    //     return headers
    // }
})


export const apiSlice = createApi({
    baseQuery,
    endpoints: builder => ({}),
    tagTypes: ['User', 'Product']
})

