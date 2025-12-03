import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = `http://localhost:5257/`

export const logAndReg = createApi({
  reducerPath: 'logAndReg',
  baseQuery: fetchBaseQuery({ baseUrl: api }),
  endpoints: (builder) => ({
    loginAdmin: builder.mutation({
      query: (adminData) => ({
        url: `api/auth/login`,
        method: "POST",
        body: adminData,
      }),
    }),
    regUser: builder.mutation({
      query: (UserData) => ({
        url: `api/auth/register`,
        method: "POST",
        body: UserData,
      }),
    }),
  }),
})

export const { useLoginAdminMutation,useRegUserMutation } = logAndReg
