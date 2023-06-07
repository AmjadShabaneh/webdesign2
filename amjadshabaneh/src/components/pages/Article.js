import React, { Component } from 'react'

export default class Article extends Component {
  render() {
    return (
        
        <div className='bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen w-full'>
        <div className='border-b-2 border-gray-400 w-3/4 mx-auto '>
        <img className='w-1/3 mx-auto mt-12 mb-4' alt={this.props.title} src={this.props.img}/>
        </div>
        <div className='mt-3 w-10/12 mx-auto '>
           <h1 className='text-4xl text-center text-white'>{this.props.title}</h1>
           <p className='text-white text-lg mt-4 '>{this.props.content}</p>
        </div>
        <div><br></br><br></br></div>
     </div>
    )
  }
}
