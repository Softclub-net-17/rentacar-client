import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = `http://localhost:5257/`;

export const valueApi = createApi({
  reducerPath: "valueApi",
  tagTypes:["valueGet"],
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
    getValues: builder.query({
      query: () => `api/values`,
      providesTags:["valueGet"],

    }),
     getValueByIdCarAtribut:builder.mutation({
      query:(idCarAtribut)=>({
        url:`api/values/${idCarAtribut}`,
        method:"GET",
      })
    }),
    addNewVales:builder.mutation({
      query:(newValue)=>({
        url:`api/admin/values`,
        method:"POST",
        body:newValue
      }),
      invalidatesTags:["valueGet"]
    }),
    deleteValues:builder.mutation({
      query:(idValues)=>({
        url:`api/admin/values/${idValues}`,
        method:"DELETE",
      }),
      invalidatesTags:["valueGet"]
    }),
    
    editValue:builder.mutation({
      query:({idValues,updateValue})=>({
        url:`api/admin/values/${idValues}`,
        method:"PUT",
        body:updateValue
      }),
      invalidatesTags:["valueGet"]
    }),

    
  }),
});

export const {useAddNewValesMutation,useEditValueMutation,useDeleteValuesMutation, useGetValuesQuery,useGetValueByIdCarAtributMutation } = valueApi;
