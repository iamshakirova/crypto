import {React, useState , useEffect}from 'react'
import { Link } from 'react-router-dom'
import {Card, Row, Col, Input} from 'antd'
import { useGetCryptosQuery } from '../services/cryproApi'



const Cryprocurrencies = ({simplified}) => {
  const count = simplified ? 10 : 50
  const {data: cryptosList, isFetching} = useGetCryptosQuery(count)
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins || [])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((item) =>
     item.name.toLowerCase().includes(searchTerm))
    setCryptos(filteredData)
  }, [cryptosList, searchTerm])
 

  if(isFetching) return 'Loading cryptos...';
  return (
    <>
  {
    !simplified && (
        <div className='search-crypto'>
        <Input placeholder='Search Cryptos' onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}>
          
        </Input>
      </div>
    )
  }
    <Row className='crypto-card-container' gutter={[32,32]}>
      {
        cryptos?.map((crypto) => (
          <Col key={crypto.uuid} xs={24} sm={12} lg={6} className='crypto-card'>
            <Link key={crypto.uuid} to={`/crypto/${crypto.uuid}`}>
              <Card title={`${crypto.rank}. ${crypto.name}`} extra={<img className='crypto-image' src={crypto.iconUrl} alt='img'></img>}>
                  <p>Price:{crypto.price}</p>
                  <p>Market Cap:{crypto.marketCap}</p>
                  <p>Daily Change{crypto.change}</p>
              </Card>
            </Link>
          </Col>
        ))
      }
    </Row>
    </>
  )
}

export default Cryprocurrencies