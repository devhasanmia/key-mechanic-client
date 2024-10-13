import { baseApi } from "../../api/api";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "/product",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllProductsQuery } = productApi;
