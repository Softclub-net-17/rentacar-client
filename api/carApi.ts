import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IresponseData } from "./carListType";

// api
const api = `http://localhost:5257/`;

export const carApi = createApi({
  reducerPath: "carApi",
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
    getCars: builder.query({
      query: () => `api/cars`,
    }),
    getCarByid:builder.mutation({
      query:(idCar)=>({
        url:`api/cars/${idCar}`,
        method:"GET",
      })
    })
  }),
});

export const { useGetCarsQuery,useGetCarByidMutation } = carApi;
