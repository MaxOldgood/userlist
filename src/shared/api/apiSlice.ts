import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface CatImage {
  _id: string;
  url: string;
}

const API_BASE_URL = "https://cataas.com";
const CATS_ENDPOINT = "/api/cats?limit=20";

export const apiSlice = createApi({
  reducerPath: "randomPics",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getRandomCats: builder.query<string[], void>({
      query: () => CATS_ENDPOINT,
      transformResponse: (response: CatImage[]) => {
        return response.map((image) => `${API_BASE_URL}/cat/${image._id}`);
      },
    }),
  }),
});

export const { useGetRandomCatsQuery } = apiSlice;
