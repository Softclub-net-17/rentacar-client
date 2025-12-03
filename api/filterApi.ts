import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IresponseData } from "./carListType";

// api
const api = `http://localhost:5257/`;

export const filterApi = createApi({
  reducerPath: "filterApi",
  baseQuery: fetchBaseQuery({
    baseUrl: api,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accsess_token");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getByFilters: builder.mutation({
      query: (formdata) => ({
        url:`api/cars/filter`,
        method:"POST",
        body:formdata
      }),
    }),
  }),
});

export const { useGetByFiltersMutation } = filterApi;
