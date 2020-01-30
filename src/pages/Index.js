import React, { Component } from 'react'
import { Layout, Row, Col, List } from 'antd'
import { Card } from 'antd';

const { Meta } = Card;
const { Content } = Layout
// src / img / img - 1.jpg
const hotels = [
  {
    "id": 1,
    "img": "../src/img/img-1.jpg",
    "name": "HOTELS - 109",
    "text": "The section presents cottages located in popular areas of Uzbekistan. You can see photos, compare prices, check availability and make a reservation."
  },
  {
    "id": 2,
    "img": "../img/img-2.jpg",
    "name": "SANATORIUM - 9",
    "text": "The section provides full information about the guides of Uzbekistan. You can view detailed information about the guide, excursion directions, see the schedule of employment of the guide, choose a suitable option and book the service"
  },
  {
    "id": 3,
    "img": "../img/img-3.jpg",
    "name": "RESORTS - 9",
    "text": "The section presents the leading sanatoriums in Uzbekistan. You can view photos of resorts, get full information about the services provided, compare prices, check availability and book a room."
  },
  {
    "id": 4,
    "img": "../img/img-4.jpg",
    "name": "HOTELS - 109",
    "text": "The section presents cottages located in popular areas of Uzbekistan. You can see photos, compare prices, check availability and make a reservation."
  },
  {
    "id": 5,
    "img": "../img/img-5.jpg",
    "name": "RESORTS - 9 - 109",
    "text": "The section provides full information about the guides of Uzbekistan. You can view detailed information about the guide, excursion directions, see the schedule of employment of the guide, choose a suitable option and book the service"
  },
  {
    "id": 6,
    "img": "../img/img-5.jpg",
    "name": "HOTELS - 109",
    "text": "The section provides full information about the guides of Uzbekistan. You can view detailed information about the guide, excursion directions, see the schedule of employment of the guide, choose a suitable option and book the service"
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
          </Row>
        </Content>
      </Layout >
    )
  }
}

const ListCard = ({ data }) => (
  <Card
    hoverable
    style={{ width: 360, maxWidth: 360, maxHeight: 200, minHeight: 200 }}
    cover={<img alt="example" src="" />}
  >
    <Meta title={data.name} description={data.text} />
  </Card>
);

export default Index
