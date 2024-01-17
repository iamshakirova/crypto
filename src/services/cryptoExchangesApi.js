import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoExchangesApiHeaders = {
    'X-RapidAPI-Key': '29ceb3138cmsh229cd1fe406ec4cp174455jsn0ab16421706f',
    'X-RapidAPI-Host': 'qvantana.p.rapidapi.com'
}
const baseUrl = 'https://qvantana.p.rapidapi.com'

const createExchangesRequest = (url) =>({
    url, headers: cryptoExchangesApiHeaders
})

export const cryptoExchangesApi =  createApi({
    reducerPath: 'cryptoExchangesApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints:(builder) =>({
        getCryptoExchanges: builder.query({
            query: () => createExchangesRequest(`/exchanges`)
        })
    })
})

export const {
    useGetCryptoExchangesQuery
} = cryptoExchangesApi