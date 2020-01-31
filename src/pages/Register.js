import React, { Component } from 'react'
import { Layout, Row, Col, Form, Icon, Button, Checkbox, Input } from 'antd';

const { Content } = Layout

export class Register extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  render () {
    return (
      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
          <Row>
            <Col span={4} offset={8}>
              <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>

                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item>

                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Checkbox>Remember me</Checkbox>
                  <a className="login-form-forgot" href="">Forgot password</a>
                  <br />

                  <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
                  Or <a href="">register now!</a>
                </Form.Item>
              </Form>
            </Col>
          </Row>

        </Content>
      </Layout >
    )
  }
}

export default Register
