import React, { Component } from 'react'
import { Result, Button, Layout, Row, Col } from 'antd'
import { Link } from "react-router-dom"

export class NotFound extends Component {
  render () {
    return (
      <Layout style={{ margin: '24px 16px 0' }}>
        <Row>
          <Col span={12} offset={6}>
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
              extra={<Button ><Link to="/">Back Home</Link> </Button>}
            />
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default NotFound
