import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Card extends Component {
  
 

 
  render() {
    return (
      //this.props.title this.props.text this.props.img 
      <div className='grid grid-cols-5 gap-3 h-auto w-4/5 bg-transparent row border-b-2 border-gray-400 pb-4 text-white mt-5'>
        <div className='col-span-2 row-span-3 m-6 p-0'> <img src={this.props.img} className='' alt={this.props.title}></img> </div>
        <div className='relative col-span-3 mb-4'><p className='text-3xl block mb-3'>{this.props.title}</p>
          <p>{this.props.text}</p>

        </div>
        <div className='mt-2 bottom-1 w-full col-span-3' >
          <input type='text' placeholder='Add comment...'  name="shit" id="shit" className='rounded-full min-w-full bg-inherit border-2 p-3  h-1  ' />
          <Link to={this.props.link}>
          <button
                        class="mt-4 flex items-center justify-between w-3/6 px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-cyan-900 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        <span>Read More</span>

                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd" />
                        </svg>
                    </button> 
                    </Link>
                    
        </div>
    
      </div>
    )
  }
}
