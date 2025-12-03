import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = `http://localhost:5257/`;

export const carAtributApi = createApi({
  reducerPath: "carAtributApi",
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
  tagTypes:["getAtribiut"],
  endpoints: (builder) => ({
    getCarAtribut: builder.query({
      query: () => `api/car-attribute`,
      providesTags:["getAtribiut"],
    }),
    getCarAtributById:builder.mutation({
      query:(idAtribut)=>({
        url:`api/admin/car-attributes/${idAtribut}`,
        method:"GET",
      })
    }),
    addNewAtribiut:builder.mutation({
      query:(newAtrubiut)=>({
        url:`api/admin/car-attributes`,
        method:"POST",
        body:newAtrubiut,
      }),
      invalidatesTags:["getAtribiut"],
    }),
    deleteAtribut:builder.mutation({
      query:(idAtribut)=>({
        url:`api/admin/car-attributes/${idAtribut}`,
        method:"DELETE",
      }),
      invalidatesTags:["getAtribiut"],
    }),
    editAtribiut:builder.mutation({
      query:({idAtribut,nameAtribut})=>({
        url:`api/admin/car-attributes/${idAtribut}`,
        method:"PUT",
        body:nameAtribut
      }),
      invalidatesTags:["getAtribiut"],
    })
  }),
});

export const { useGetCarAtributQuery,useDeleteAtributMutation,useEditAtribiutMutation,useAddNewAtribiutMutation,useGetCarAtributByIdMutation } = carAtributApi;
