import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

  

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', 'e828f0867emshf815761d9fb407fp1bdb96jsn03a4748c67ac');
                return headers;
            }
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({query: () => '/charts/world'}),
        })

    });
    export const {
        useGetTopChartsQuery,

    } = shazamCoreApi;