import { apiSlice } from "../app/api/apiSlice";
import { LoginInput, RegisterInput } from "../types/types";


export const authApiSlice = apiSlice.injectEndpoints({
   endpoints: builder => ({
    register: builder.mutation({
        query: (creds: RegisterInput) => ({
            url: '/register',
            method: 'POST',
            body: {
                ...creds
            }
        })
    }),
    login: builder.mutation({
        query: (creds: LoginInput) => ({
            url: '/auth',
            method: 'POST',
            body: {
                ...creds
            }
        })
    }),
    logout: builder.mutation({
        query: () => ({
            url: '/logout',
            method: 'GET'
        })
    })
   })
})



export const {
    useLoginMutation,
    useLogoutMutation,
    useRegisterMutation
} = authApiSlice


