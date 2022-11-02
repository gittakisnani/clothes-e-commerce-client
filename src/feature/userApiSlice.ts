import { apiSlice } from "../app/api/apiSlice";
import { UpdateUserInput, UpdateUserParams, User } from "../types/types";

interface DeleteUserParams extends UpdateUserParams{}


const userApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUserById: builder.query<User, string>({
            query: (userId) => `/users/${userId}`,
            providesTags: [{ type: 'Users' }]
        }),
        update: builder.mutation<User, { updates: Partial<UpdateUserInput>, params: UpdateUserParams}>({
            query: ({ updates, params }) => ({
                url: `/users/${params.userId}`,
                method: 'PUT',
                body: {
                    ...updates
                },
            }),
            invalidatesTags: [{ type: 'Users', id: 'LIST'}]
        }),
        delete: builder.mutation<void, DeleteUserParams>({
            query: ({ userId }) => ({
                url: `/users/${userId}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Users', id: 'LIST'}]
        }),
        getMe: builder.query<User, void>({
            query: () => '/me',
            providesTags: [{ type: 'Users'}]
        })
    })
})


export const {
    useUpdateMutation,
    useDeleteMutation,
    useGetUserByIdQuery,
    useGetMeQuery
} = userApiSlice



