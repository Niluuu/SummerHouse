import React, { Component } from 'react'
import { Layout, Menu, Icon, Col, Button } from 'antd'
import { Link } from "react-router-dom"
import Logo from "../img/logo.png"
import SelectLeng from './selectLeng'
import { Typography } from 'antd'

const { Header, Sider } = Layout
const { Text } = Typography


export class Nav extends Component {
  render () {
    return (
      <Layout>
        {/* mobile */}
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          theme="light"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className="nav-text">nav 3</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="user" />
              <span className="nav-text">nav 4</span>
            </Menu.Item>
          </Menu>
        </Sider>

        <Header
          theme="light"
          style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff', display: "flex", justifyContent: "center" }}
        >
          <Menu
            theme="light"
            mode="horizontal"
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to="/"><img src={Logo} /></Link></Menu.Item>
            <Menu.Item key="2" className="menu-item" ><Link to="/sanatorium">Hotels</Link></Menu.Item>
            <Menu.Item key="3" className="menu-item"><Link to="/register">Summer houses/houses</Link></Menu.Item>
            <Menu.Item key="4" className="menu-item"><Link to="/detail">Resorts</Link></Menu.Item>
            <Menu.Item key="5" className="menu-item"><Link to="/sanatorium">Sanatorium</Link></Menu.Item>
            <Menu.Item key="6" className="menu-item"><Link to="/tour">Tour</Link></Menu.Item>
            <Menu.Item key="7" className="menu-item"><Link to="/">More</Link></Menu.Item>
            <Menu.Item className="float-right-menu">
              <Col className="" md={20} xs={{ span: 20, offset: 2 }} lg={{ span: 18, offset: 0 }} >
                <Button type="danger" shape="circle" className="m-md">
                  <Icon type="heart" />
                </Button>
                <SelectLeng />
                <Button type="link" >
                  <Link to="/register">
                    <Icon type="login" className="p-sm" />
                    <Text strong type="primary">Log In</Text>
                  </Link>
                </Button>
              </Col>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    )
  }
}

export default Nav
