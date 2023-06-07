import React, { Component } from 'react'

export default class Comment extends Component {
  render() {
    return (
      <div>
        <div className='border-y-2 border-white text-white'>{this.props.cont}</div>
      </div>
    )
  }
}
