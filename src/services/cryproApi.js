import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders = {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST
}

// const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) =>({
    url, headers: cryptoApiHeaders
})

export const cryptoApi =  createApi({
    reducerPath: 'cryptoApi',
    baseQuery : fetchBaseQuery({baseUrl:process.env.REACT_APP_RAPID_API_URL}),
    endpoints:(builder) =>({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory:builder.query({
            query: ({coinId, timeperiod}) => createRequest(`/coin/${coinId}/history?timeperiod=${timeperiod}`)
        })
    })
})

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery
} = cryptoApi



