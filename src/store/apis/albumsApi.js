import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      addAlbums: builder.mutation({
        invalidatesTags: (result, error, user) => {
          return [{ type: "error", id: user.id }];
        },
        query: (user) => {
          return {
            url: "/albums",
            title: faker.commerce.productName(),
          };
        },
      }),
      fetchAlbums: builder.query({
        providesTags: (result, error, user) => {
          return [{ type: "Album", id: user.id }];
        },
        query: (user) => {
          return {
            url: "/albums",
            params: {
              userId: user.id,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchAlbumsQuery, useAddAlbumsMutation } = albumsApi;
// mutation ===>>>>>>> a function that performs such a side effect on the server
export { albumsApi };
