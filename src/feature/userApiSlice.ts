import { apiSlice } from "../app/api/apiSlice";
import { UpdateUserInput, UpdateUserParams } from "../types/types";

interface DeleteUserParams extends UpdateUserParams{}


const userApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUserById: builder.mutation({
            query: (userId: string) => ({
                url: `/users/${userId}`,
                method: 'GET',
            })
        }),
        update: builder.mutation({
            query: ({ updates, params }: { updates: Partial<UpdateUserInput>, params: UpdateUserParams}) => ({
                url: `/users/${params.userId}`,
                method: 'PUT',
                body: {
                    ...updates
                },
            })
        }),
        delete: builder.mutation({
            query: ({ userId }: DeleteUserParams) => ({
                url: `/users/${userId}`,
                method: 'DELETE',
            })
        })
    })
})


export const {
    useUpdateMutation,
    useDeleteMutation,
    useGetUserByIdMutation
} = userApiSlice



