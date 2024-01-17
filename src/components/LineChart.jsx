import React from 'react'
import {Chart as ChartJS, registerables } from 'chart.js'
import {Line} from 'react-chartjs-2'
import {Col, Row, Typography} from 'antd'
const {Title} = Typography
ChartJS.register(...registerables)


const LineChart = ({coinHistory, currentPrice, coinName}) => {
    const coinPrice = []
    const coinTimeStamp = []

    for(let i = 0; i < coinHistory?.data?.history?.length; i++){
        coinPrice.push(coinHistory?.data?.history[i].price)
    }
    for(let i = 0; i < coinHistory?.data?.history?.length; i++){
        coinTimeStamp.push(coinHistory?.data?.history[i].timestamp)
    }
    console.log(coinTimeStamp, coinPrice);
    console.log(coinHistory)

    const data = {
        labels:coinTimeStamp,
        datasets:[
            {
                label:'Price in USD',
                data: coinPrice,
                fill:false,
                backgroundColor:"#0071bd",
                borderColor:'#0071bd'
            }
        ]
    }

    const options = {
        scales: {
            yAxes:[
                {
                    ticks:{
                        beginAtZero:true
                    },

                }, 
            ],
        },
    }

  return (
    <>
        <Row className='chart-header'>
            <Title className='chart-title' level={2}></Title>
            <Col className='price-container'>
                <Title className='price-change' level={5}>Change:{coinHistory?.data?.change}</Title>
                <Title className='current-price' level={5}>Current:{coinName} Price:{Math.floor(currentPrice)}</Title>
            </Col>
            <Line data={data} options={options}/>
        </Row>
    </>
  )
}

export default LineChart