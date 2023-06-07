import React, { Component } from 'react'
import Posts from './Posts'
export default class Home extends Component {
  render() {
    return (
      <div className='p-8 bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen w-full'>
      <Posts/>
      </div>
    )
  }
}
