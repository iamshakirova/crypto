import React from 'react'
import {Button, Menu, Typography, Avatar} from "antd"
import {Link} from 'react-router-dom'
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined} from "@ant-design/icons"
import icon from '../images/img.jpg'
const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='logo-container'>
            <Avatar src={icon} size="large"></Avatar>
            <Typography.Title className='logo' level={2}>
                <Link to="/">Crypton</Link>
            </Typography.Title>
        </div>
        <Menu theme='dark'>
          <Menu.Item icon={<HomeOutlined/>}>
            <Link to=''>Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined/>}>
            <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined/>}>
            <Link to='/exhanges'>Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined/>}>
            <Link to='/news'>News</Link>
          </Menu.Item>
        </Menu>
    </div> 
  )
}

export default Navbar