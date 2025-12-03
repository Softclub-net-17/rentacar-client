import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = `http://localhost:5257/`;

export const makeApi = createApi({
  reducerPath: "makeApi",
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
  tagTypes:["getMakes"],
  endpoints: (builder) => ({
    getMakes: builder.query({
      query: () => `api/makes`,
      providesTags:["getMakes"],
    }),
    getMakeById:builder.mutation({
      query:(makeId)=>({
        url:`api/admin/makes/${makeId}`,
        method:"GET",
      }),
      invalidatesTags:["getMakes"]
    }),
    addNewMake:builder.mutation({
      query:(newMake)=>({
        url:`api/admin/makes`,
        method:"POST",
        body:newMake
      }),
      invalidatesTags:["getMakes"]
    }),
    EditMake:builder.mutation({
      query:({Make,makeId})=>({
        url:`api/admin/makes/${makeId}`,
        method:"PUT",
        body:Make
      }),
      invalidatesTags:["getMakes"]
    }),
    makeDeActive:builder.mutation({
      query:(idMake)=>({
        url:`api/admin/makes/deactivate/${idMake}`,
        method:"PUT",
      }),
      invalidatesTags:["getMakes"]
    }),
    makeActive:builder.mutation({
      query:(idMake)=>({
        url:`api/admin/makes/activate/${idMake}`,
        method:"PUT",
      }),
      invalidatesTags:["getMakes"]
    })
  }),
});

export const { useGetMakesQuery,useGetMakeByIdMutation,useEditMakeMutation,useAddNewMakeMutation,useMakeDeActiveMutation,useMakeActiveMutation } = makeApi;
