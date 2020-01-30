import React from 'react'
import { Select } from 'antd';

const { Option } = Select;

function handleChange (value) {
  console.log(`selected ${value}`);
}


function SelectLeng () {
  return (
    <>
      <Select defaultValue="en" style={{ width: 80 }} onChange={handleChange}>
        <Option value="uz">uz</Option>
        <Option value="en">eng</Option>
        <Option value="ru">ru</Option>
      </Select>
    </>
  )
}

export default SelectLeng
