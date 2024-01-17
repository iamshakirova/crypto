import React from 'react'
import { useState } from 'react';
import { useGetCryptoExchangesQuery } from '../services/cryptoExchangesApi'
import {Card, Row, Col, Input} from 'antd'



const Exchanges = () => {
  const { data: cryptoExchanges, isFetching } = useGetCryptoExchangesQuery();
  console.log(cryptoExchanges)
  const [exchanges, setExchanges] = useState(cryptoExchanges || [])


  if(isFetching) return 'Loading exchanges...';
  

  return (
    <>
     <Row className='crypto-card-container ' gutter={[32,32]}>
      {
        exchanges?.map((exchange, i) => (
          <Col key={i}  xs={24} sm={12} lg={6} className='crypto-card'>
              <Card className='exchange-image'>
                  <p>Name: {exchange.name}</p>
                  {exchange.name === 'binance' ? (
                    <img
                      src='https://public.bnbstatic.com/image/cms/blog/20230605/026722ab-19ca-4c7a-ae61-a98af8851159.png'
                      alt='Binance Logo'
                    />
                    ) : exchange.name === 'bybit' ? (
                      <img
                        src='https://upload.wikimedia.org/wikipedia/commons/0/0f/Bybit-logo_%28cropped%29.png'
                        alt='Bybit Logo'
                      />
                    ) : exchange.name === 'bitstamp' ? (
                      <img
                        src='https://blog.bitstamp.net/_ipx/enlarge_true&w_1200&f_webp&q_80/blog.bitstamp.net/bts-img/2023/08/bitstamp-halt-trading.webp'
                        alt='Bybit Logo'
                      />
                    ) : exchange.name === 'gateio' ? (
                      <img
                        src='https://coinclarity.com/wp-content/uploads/2023/07/gateio_logo.svg'
                        alt='Bybit Logo'
                      />
                    ) : (
                    ""
                  )}
              </Card>
          </Col>
        ))
      }
    </Row>
    </>
  )
}

export default Exchanges