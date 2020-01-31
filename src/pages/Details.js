import React, { Component } from 'react'

export class Details extends Component {
  componentDidMount () {
    const { params } = this.props.match;
    console.log("params Detail", params)
  }
  render () {
    return (
      <div>
        details
      </div>
    )
  }
}

export default Details
