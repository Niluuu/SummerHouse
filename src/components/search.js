import React, { Component } from 'react'
import { Input } from 'antd'
const { Search } = Input;

export class SearchInput extends Component {
  render () {
    return (
      <div style={{ margin: '24px 16px' }}>
        <Search size="large" placeholder="input search text" enterButton />
      </div>
    )
  }
}

export default Search
