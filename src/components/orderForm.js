import React, { Component } from 'react'
import { Layout, Row, Col, List, Input, Radio } from 'antd'
import { Select } from 'antd'
import { Typography } from 'antd'
import { DatePicker } from 'antd';
import { Slider, Switch } from 'antd';

import moment from 'moment';

const { RangePicker } = DatePicker;

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];


const { Text, Title } = Typography
const { Option } = Select
const { Content } = Layout


function handleChange (value) {
  console.log(`selected ${value}`);
}
export class OrderForm extends Component {
  state = {
    value: 1,
  };

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render () {
    return (
      <Layout>
        <div className="filter-form-col" style={{ background: "#D4D5D5", borderRadius: 2 }}>
          <Title className="order-title p-md">Order Form</Title>
          <Row className="m-md" type="flex" justify="space-between">
            <Text className="p-rl-lg" >Kelish:</Text>
            <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
          </Row>
          <Row className="m-md" type="flex" justify="space-between">
            <Text className="p-rl-lg" >Kelish vaqti:</Text>
            <Radio.Group onChange={this.onChange} value={this.state.value}>
              <Radio value={1}>10:00 dan</Radio>
              <Radio value={2}>20:00 dan</Radio>
            </Radio.Group>
          </Row>
          <Row className='m-md' type="flex" justify="space-between">
            <Text className="p-rl-lg" >Ketish:</Text>
            <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
          </Row>
          <Row className="m-md" type="flex" justify="space-between">
            <Text className="p-rl-lg" >Ketish vaqti:</Text>
            <Radio.Group onChange={this.onChange} value={this.state.value}>
              <Radio value={1}>10:00 dan</Radio>
              <Radio value={2}>20:00 dan</Radio>
            </Radio.Group>
          </Row>
          <Row>
            <Title className="order-price p-md ">Price : 1 300 000 sum </Title>
          </Row>
        </div>
      </Layout>
    )
  }
}

export default OrderForm
