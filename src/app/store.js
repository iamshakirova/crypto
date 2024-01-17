import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import { cryptoApi } from '../services/cryproApi'
import { cryptoNewsApi } from '../services/cryptoNewsApi'
import { cryptoExchangesApi } from '../services/cryptoExchangesApi'

export default configureStore({
    reducer:{
        [cryptoApi.reducerPath] : cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
        [cryptoExchangesApi.reducerPath]: cryptoExchangesApi.reducer,

    },
    middleware : (getDefaultMiddleware) =>(
        getDefaultMiddleware().concat(cryptoApi.middleware, cryptoNewsApi.middleware, cryptoExchangesApi.middleware)
    )
})


