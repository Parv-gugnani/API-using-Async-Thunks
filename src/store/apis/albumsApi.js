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
        query: (user) => {
          return {
            url: "/albums",
            title: faker.commerce.productName(),
          };
        },
      }),
      fetchAlbums: builder.query({
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
