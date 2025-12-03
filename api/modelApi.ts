import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = `http://localhost:5257/`;

export const modelApi = createApi({
  reducerPath: "modelApi",
  tagTypes:["modelGet"],
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
    getModels: builder.query({
      query: () => `api/models`,
      providesTags:["modelGet"],
    }),
    addModel:builder.mutation({
      query:(newModel)=>({
        url:`api/admin/models`,
        method:"POST",
        body:newModel
      }),
      invalidatesTags:["modelGet"]
    }),
    deleteModel:builder.mutation({
      query:(modelId)=>({
        url:`api/admin/models/${modelId}`,
        method:"DELETE",
      }),
      invalidatesTags:["modelGet"]
    }),
    editModel:builder.mutation({
      query:({modelId,updateModel})=>({
        url:`api/admin/models/${modelId}`,
        method:"PUT",
        body:updateModel
      }),
      invalidatesTags:["modelGet"]
    }),
  }),
});

export const { useGetModelsQuery,useEditModelMutation,useAddModelMutation,useDeleteModelMutation } = modelApi;
