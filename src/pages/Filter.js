import React, { Component } from 'react'
import { Layout, Row, Col, List, Typography } from 'antd'
import SearchInput from '../components/search';
import FilterForm from '../components/filterForm';
import FilteredCards from '../components/filteredCard';
import { Link } from "react-router-dom";
import { hotels, blog } from "../utils"

const { Text, Title } = Typography
const { Content } = Layout

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
                  <Title level={2} ><span style={{ textTransform: 'capitalize' }} >{params.type}</span>,{params.type} in Uzbekistan - prices, photos, online booking</Title>
                  <List
                    grid={{ gutter: 20, column: 2 }}
                    dataSource={hotels}
                    renderItem={item => (
                      <List.Item>
                        <Link to={`${params.type}/id`}>
                          <FilteredCards data={item} />
                        </Link>
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
