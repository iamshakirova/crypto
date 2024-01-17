import React, { useState, useEffect } from 'react'
import {Select, Typography, Row, Col, Card} from 'antd'
import moment from 'moment'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
const { Text, Title } = Typography


// const News = () => {
  // const {data:cryptoNews} = useGetCryptoNewsQuery()
  // const [newsData, setNewsData] = useState(cryptoNews?.data || []);

  //  useEffect(() => {
  //   if (cryptoNews?.data) {
  //     setNewsData(cryptoNews.data.slice(0, 10));
  //   }
  // }, [cryptoNews]);

  const News = ({ newsCount }) => {
    const { data: cryptoNews } = useGetCryptoNewsQuery();
  
    const newsData = cryptoNews?.data?.slice(0, newsCount) || [];

  if(!cryptoNews?.data) return 'Loading...'
    return (
      <>
      <Row gutter={[24,24]}>
        {
          newsData.map((news, i) =>(
           <Col key={i} lg={12} sm={12} xs={6}>
            <Card hoverable>
              <a href={news.url} target='_blank'>
                <Title level={4}>
                  {news.title}
                </Title>
                <p>{news.description}</p>
              </a>
            </Card>
           </Col>
          ))
        }
      </Row>
      </>
    )
  }
export default News
