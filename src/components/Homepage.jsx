import {React , useState} from 'react'
import {millify} from 'millify'
import { Link } from 'react-router-dom'
import { Typography, Row, Col, Statistic, Card, Title } from 'antd'
import { useGetCryptosQuery } from '../services/cryproApi'
// import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import News from './News'
import Cryprocurrencies from './Cryprocurrencies'


const Homepage = () => {
  const {data, isFetching} = useGetCryptosQuery(10);
  console.log(data)
  const globalStats = data?.data?.stats;

  if(isFetching) return('Fetching...')

  return (
    <div>
      <Typography.Title className='heading' level={2}>
        Global Crypto Stats
      </Typography.Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Crypto" value={globalStats?.total}/>
        </Col>
        <Col span={12} >
          <Statistic title="Total Exchange" value={globalStats?.totalExchanges}/>
        </Col>
        <Col span={12} >
          <Statistic title="Total Market Cap" value={globalStats?.totalMarketCap}/>
        </Col>
        <Col span={12} >
          <Statistic title="Total 24 volume" value={globalStats?.total24hVolume}/>
        </Col>
        <Col span={12} >
          <Statistic title="Total Markets" value={globalStats?.totalMarkets}/>
        </Col>
        <Col span={12} >
          <Statistic title="Total Cryptocurrencies" value={globalStats?.totalCoins}/>
        </Col>
      </Row>
      <div className='coin-heading-container'>
        <Typography.Title level={2}>
            Top 10 cryptos
        </Typography.Title>
        <Typography.Title level={3}>
            <Link to ='/cryptocurrencies'>Show more</Link>
        </Typography.Title>
        <Cryprocurrencies simplified={true}></Cryprocurrencies>
      </div>
      <div className='coin-heading-container'>
        <Typography.Title level={2}>
            Top 10 cryptos
        </Typography.Title>
        <Typography.Title level={3}>
            <Link to ='/news'>Show more</Link>
        </Typography.Title>
        <News newsCount={10}  />
      </div>
    </div>
  )
}

export default Homepage