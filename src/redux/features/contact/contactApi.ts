import { baseApi } from "../../api/api";

const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllMessage: builder.query({
      query: () => ({
        url: "/contact",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllMessageQuery } = contactApi;
