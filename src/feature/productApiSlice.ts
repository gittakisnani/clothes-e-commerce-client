import { apiSlice } from "../app/api/apiSlice";
import { Product, ProductParams } from "../types/types";

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        createProduct: builder.mutation({
            query: (details: Product) => ({
                url: '/product/new',
                method: 'POST',
                body: {
                    ...details
                }
            })
        }),
        updateProduct: builder.mutation({
            query: ({ updates, params }: { updates: Partial<Product>, params: ProductParams}) => ({
                url: `/product/${params.productId}`,
                method: 'PUT',
                body: {
                    ...updates
                }
            })
        }),
        getProduct: builder.mutation({
            query: ({ productId }: ProductParams) => ({
                url: `/product/${productId}`,
                method: 'GET',
            })
        }),
        deleteProduct: builder.mutation({
            query: ({ productId }: ProductParams) => ({
                url: `/product/${productId}`,
                method: 'DELETE'
            })
        })
    })
})


export const {
    useCreateProductMutation,
    useUpdateProductMutation,
    useGetProductMutation,
    useDeleteProductMutation
} = productApiSlice