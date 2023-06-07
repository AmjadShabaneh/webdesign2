import React, { Component } from 'react'

export default class Register extends Component {
  render() {
    return (
      <div className='bg-gray-100 '>
                    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 ">
          <form className='drop-shadow-md bg-white pb-20 inline-block text-center w-3/12 h-auto rounded'>
            
            <h2 className='text-3xl text-gray-900 mt-12'>Sign up</h2>
            <h2 className='text-l text-gray-900 mt-4'>Create free account to keep up with technology</h2>
          <div>
                    <input type="text" placeholder="Enter Name" pattern='[A-Za-z].{10,20}'
                    className="border w-4/6 px-3 py-1 mt-10 text-gray-700 placeholder-gray-500 bg-white  border-gray-900 rounded  
                    valid:border-cyan-700
                      invalid:border-rose-600" />
          </div>
          <div>
                    <input type="email" placeholder="example@gmail.com"
                     className="border w-4/6 px-3 py-1 mt-4 text-gray-700 placeholder-gray-500 bg-white  border-gray-900 rounded  
                     valid:border-cyan-700
                      invalid:border-rose-600" />
          </div>
          <div>
                    <input type="password" placeholder="Enter Password"  pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#,@,&]).{7,}'
                    className="border w-4/6 px-3 py-1 mt-4 text-gray-700 placeholder-gray-500 bg-white  border-gray-900 rounded 
                    valid:border-cyan-700
                      invalid:border-rose-600" />
          </div>
          <div>
                    <input type="tel" placeholder="0000-000-000" pattern='[0-9]{4}-[0-9]{3}-[0-9]{3}'
                    className="border w-4/6 px-3 py-1 mt-4 text-gray-700 placeholder-gray-500 bg-white  border-gray-900 rounded  
                    valid:border-cyan-700
                      invalid:border-rose-600
                    " />
          </div>
          <div>
                    <input type="text" placeholder="Gender" pattern='male|female'
                    className="border w-4/6 px-3 py-1 mt-4 text-gray-700 placeholder-gray-500 bg-white  border-gray-900 rounded  
                    valid:border-cyan-700
                      invalid:border-rose-600" />
          </div>
          <button
                        class="mt-4 ml-auto mr-auto flex items-center justify-between w-4/6 px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-cyan-900 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        <span>sign up</span>

                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
          </form>
          </div>
      </div>
    )
  }
}
