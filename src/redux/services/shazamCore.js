import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/* const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ff1599154dmsh5b5dca402e70fefp1abc9ejsn38b9776f659e",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};

fetch("https://shazam.p.rapidapi.com/charts/track", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
 */
export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'ff1599154dmsh5b5dca402e70fefp1abc9ejsn38b9776f659e');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/track' }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
