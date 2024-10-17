import { baseApi } from "../../api/api";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "/product",
        method: "GET",
      }),
      providesTags: ["Prod"],
    }),

    // Add a new product
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/product",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Prod"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Prod"] as const,
    }),
    updateProduct: builder.mutation({
      query: ({ id, updateData }) => ({
        url: `/product/${id}`,
        method: "PUT",
        body: updateData,
      }),
      invalidatesTags: ["Prod"] as const,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productApi;
