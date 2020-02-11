import React, { Component } from 'react'
import { Layout, Row, Col, List, Input } from 'antd'
import { Select } from 'antd'
import { Typography } from 'antd'
import { DatePicker } from 'antd';
import { Slider, Switch } from 'antd';

import moment from 'moment';

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';

const { Text } = Typography
const { Option } = Select
const { Content } = Layout


function handleChange (value) {
  console.log(`selected ${value}`);
}
export class FilterForm extends Component {

  render () {
    return (
      <Layout>
        <Content className="filter-form-col" style={{ background: "#D4D5D5", borderRadius: 2 }}>
          <Row type="flex" justify="space-between">
            <Text strong>Region</Text>
            <Select defaultValue="lucy" style={{ width: 218 }} onChange={handleChange}>
              <Option value="jack">Jack</Option>
            </Select>
          </Row>
          <br />

          <Row type="flex" justify="space-between">
            <Text strong>District</Text>
            <Select defaultValue="lucy" style={{ width: 218 }} onChange={handleChange}>
              <Option value="jack">Jack</Option>
            </Select>
          </Row>
          <br />

          <Row type="flex" justify="space-between">
            <Text strong>Arrival- Departure</Text>
            <RangePicker
              defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
              format={dateFormat}
              style={{ width: 218 }}
            />
          </Row>
          <br />

          <Row type="flex" justify="space-between">
            <Text strong>Sort</Text>
            <Select defaultValue="lucy" style={{ width: 218 }} onChange={handleChange}>
              <Option value="jack">Jack</Option>
            </Select>
          </Row>
          <br />

          <Row>
            <Text strong>Price range</Text>
            <Slider range defaultValue={[20, 50]} />
          </Row>
          <br />
        </Content>
      </Layout>
    )
  }
}

export default FilterForm
