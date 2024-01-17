import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsApiHeaders = {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_NEWS_RAPIDAPI_HOST
}
// const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com'

const createNewsRequest = (url) =>({
    url, headers: cryptoNewsApiHeaders
})

export const cryptoNewsApi =  createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery : fetchBaseQuery({baseUrl:process.env.REACT_APP_NEWS_API_URL}),
    endpoints:(builder) =>({
        getCryptoNews: builder.query({
            query: () => createNewsRequest(`/v1/coindesk`)
        })
    })
})

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi



































// const cryptoNewsApiHeaders = {
//     'X-RapidAPI-Key': '29ceb3138cmsh229cd1fe406ec4cp174455jsn0ab16421706f',
//     'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
// }
// const baseUrl = 'https://crypto-news16.p.rapidapi.com'

// const createNewsRequest = (url) =>({
//     url, headers: cryptoNewsApiHeaders
// })

// export const cryptoNewsApi =  createApi({
//     reducerPath: 'cryptoNewsApi',
//     baseQuery : fetchBaseQuery({baseUrl}),
//     endpoints:(builder) =>({
//         getCryptoNews: builder.query({
//             query: () => createNewsRequest(`/news/all`)
//         })
//     })
// })

// export const {
//     useGetCryptoNewsQuery,
// } = cryptoNewsApi


