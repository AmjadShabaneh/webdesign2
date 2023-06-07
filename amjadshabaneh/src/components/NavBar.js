import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class NavBar extends Component {
    
  render() {
    return (
       
        <nav className=" bg-gradient-to-r from-slate-900 to-slate-700 border-b-2 border-gray-400 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
             
            </div>
            <div className="ml-auto mr-auto hidden md:block">
              <div className=" flex items-baseline space-x-4">
                <Link to={"/"}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 focus:outline-none focus:text-white focus:bg-gray-700 hover:text-white hover:bg-gray-700"
                >
                 Home
                </Link>
                <Link to={"/Profile"}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                Profile
                </Link>
                <Link to={'/Login'}
                  
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  Login
                </Link>
                <Link
                  to={"/Register"}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
