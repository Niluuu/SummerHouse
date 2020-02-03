import React, { Component } from 'react'
import { Layout, Row, Col, List } from 'antd'
import ListCard from "../components/listCard"
import { Typography } from 'antd'
import { hotels, blog } from "../utils"

const { Title } = Typography
const { Content } = Layout
// src / img / img - 1.jpg
export class Index extends Component {
  render () {
    return (
      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
          <Row>
            <Col span={15} offset={5}>
              <List
                grid={{ gutter: 20, column: 3 }}
                dataSource={hotels}
                renderItem={item => (
                  <List.Item>
                    <ListCard data={item} />
                  </List.Item>
                )} />
            </Col>
            <Col span={15} offset={5}>
              <Title level={4} type="primary">Blog</Title>
              <List
                grid={{ gutter: 10, column: 4 }}
                dataSource={blog}
                renderItem={item => (
                  <List.Item>
                    <ListCard data={item} small />
                  </List.Item>
                )} />
            </Col>
          </Row>
        </Content>
      </Layout >
    )
  }
}

export default Index
