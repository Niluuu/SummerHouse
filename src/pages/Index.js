import React, { Component } from 'react'
import { Layout, Row, Col, List } from 'antd'
import ListCard from "../components/listCard"
import { Typography } from 'antd'

const { Title } = Typography
const { Content } = Layout
// src / img / img - 1.jpg
const hotels = [
  {
    "id": 1,
    "img": require("../img/img-1.jpg"),
    "name": "HOTELS - 109",
    "type": "hotel",
    "text": "The section presents cottages located in popular areas of Uzbekistan. You can see photos, compare prices, check availability and make a reservation.",
  },
  {
    "id": 2,
    "img": require("../img/img-2.jpg"),
    "name": "SANATORIUM - 9",
    "type": "hotel",
    "text": "The section provides full information about the guides of Uzbekistan. You can view detailed information about the guide, excursion directions, see the schedule of employment of the guide, choose a suitable option and book the service"
  },
  {
    "id": 3,
    "img": require("../img/img-3.jpg"),
    "name": "RESORTS - 9",
    "type": "hotel",
    "text": "The section presents the leading sanatoriums in Uzbekistan. You can view photos of resorts, get full information about the services provided, compare prices, check availability and book a room."
  },
  {
    "id": 4,
    "img": require("../img/img-4.jpg"),
    "name": "HOTELS - 109",
    "type": "SummerHouses",
    "text": "The section presents cottages located in popular areas of Uzbekistan. You can see photos, compare prices, check availability and make a reservation."
  },
  {
    "id": 5,
    "img": require("../img/img-5.jpg"),
    "name": "RESORTS - 9 - 109",
    "type": "SummerHouses",
    "text": "The section provides full information about the guides of Uzbekistan. You can view detailed information about the guide, excursion directions, see the schedule of employment of the guide, choose a suitable option and book the service"
  },
  {
    "id": 6,
    "img": require("../img/img-6.jpg"),
    "name": "HOTELS - 109",
    "type": "SummerHouses",
    "text": "The section provides full information about the guides of Uzbekistan. You can view detailed information about the guide, excursion directions, see the schedule of employment of the guide, choose a suitable option and book the service"
  }
]

const blog = [
  {
    "id": 1,
    "img": require("../img/blog.jpg"),
    "name": "HOTELS - 109",
    "type": "blog",
    "text": "The section presents cottages located in popular areas of Uzbekistan. You can see photos, compare prices, check availability and make a reservation."
  },
  {
    "id": 2,
    "img": require("../img/blog-2.jpg"),
    "name": "SANATORIUM - 9",
    "type": "blog",
    "text": "The section provides full information about the guides of Uzbekistan. You can view detailed information about the guide, excursion directions, see the schedule of employment of the guide, choose a suitable option and book the service"
  },
  {
    "id": 3,
    "img": require("../img/blog-3.jpg"),
    "name": "RESORTS - 9",
    "type": "blog",
    "text": "The section presents the leading sanatoriums in Uzbekistan. You can view photos of resorts, get full information about the services provided, compare prices, check availability and book a room."
  },
  {
    "id": 4,
    "img": require("../img/blog.jpg"),
    "name": "HOTELS - 109",
    "type": "blog",
    "text": "The section presents cottages located in popular areas of Uzbekistan. You can see photos, compare prices, check availability and make a reservation."
  }
]

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
