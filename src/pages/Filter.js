import React, { Component } from 'react'
import { Layout, Row, Col, List, Input } from 'antd'
import SearchInput from '../components/search';
import FilterForm from '../components/filterForm';
import { Typography } from 'antd'
import FilteredCards from '../components/filteredCard';

const { Text, Title } = Typography
const { Content } = Layout
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

export class Filter extends Component {
  componentDidMount () {
    const { params } = this.props.match;
    console.log("params", params)
  }

  render () {
    const { params } = this.props.match;

    return (
      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
          <Row>
            <Col span={12} offset={6}>
              <SearchInput />
            </Col>
          </Row>
          <Row>
            <Col span={15} offset={5}>
              <Row>
                <Col span={6}>
                  <FilterForm />
                </Col>
                <Col span={16}>
                  <Text underline className="m-sm" >{params.type}/</Text>
                  <Title level={2} style={{ textTransform: 'capitalize' }}>{params.type} , {params.type} in Uzbekistan - prices, photos, online booking</Title>
                  <List
                    grid={{ gutter: 20, column: 2 }}
                    dataSource={hotels}
                    renderItem={item => (
                      <List.Item>
                        <FilteredCards data={item} />
                      </List.Item>
                    )} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
      </Layout >
    )
  }
}

export default Filter
