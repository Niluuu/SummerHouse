import React from 'react'
import { Layout, Row, Col, List, Typography, Button, Icon } from 'antd'
import DetailSlider from '../components/DetailSlider';
import { hotels, blog } from "../utils"
import OrderForm from '../components/orderForm';

const { Text, Title } = Typography
const { Content } = Layout

export const Details = ({ match }) => {
  const hotel = hotels.find(item => item.id == match.params.id);
  console.log("hotel", hotel, match.params.id)

  return (
    <Layout>
      <Content style={{ margin: '24px 16px 0' }}>
        <Row>
          <Col span={15} offset={5}>
            <Row type="flex" justify="space-between">
              <Col>
                <Title level={2} ><span style={{ textTransform: 'capitalize' }} >{hotel.name}</span></Title>
              </Col>
              <Col>
                <Button><Icon type="compass" />In Map</Button>
              </Col>
            </Row>
            <Row type="flex">
              <Col style={{ margin: "0px 20px 0px 0px" }}>
                <Text level={2} ><span style={{ textTransform: 'capitalize' }} >{hotel.name}</span></Text>
              </Col>
              <Col>
                <Icon type="eye" />70000
              </Col>
            </Row>
            <Col style={{ margin: " 20px 0px" }} >
              <DetailSlider />
            </Col>
            <Row type="flex" justify="space-between">
              <Col>
                {/* <List
                  grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 6,
                    xxl: 3,
                  }}
                  dataSource={hotel.services}
                  renderItem={service => (
                    <List.Item>
                      <span>{service}</span>
                    </List.Item>
                  )}
                /> */}
              </Col>
              <Col>
                <OrderForm />
              </Col>
            </Row>

          </Col>
        </Row>
      </Content>
    </Layout >
  )
}

export default Details
