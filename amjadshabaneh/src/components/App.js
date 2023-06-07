import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar'
import Home from './Home'
import Profile from './Profile';
import Login from './Login'
import Register from './Register';
import Preact from './pages/Preact';
import Ppython from './pages/Ppython';
import Pflutter from './pages/Pflutter';
import Pangular from './pages/Pangular';
import Ptype from './pages/Ptype';
import Pvue from './pages/Pvue';
export default class App extends Component {
  render() {
    return (
      <div className="App bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen w-full">
     
      <header className="App-header ">
        
         
         
       
        
      </header>
      <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route exact path='/Profile' element={<Profile/>}/>
            <Route exact path='/Login' element={<Login/>}/>
            <Route exact path='/Register' element={<Register/>}/>
            <Route exact path='/pages/Preact' element={<Preact/>}></Route>
            <Route exact path='/pages/Ppython' element={<Ppython/>}></Route>
            <Route exact path='/pages/Pflutter' element={<Pflutter/>}></Route>
            <Route exact path='/pages/Pangular' element={<Pangular/>}></Route>
            <Route exact path='/pages/Ptype' element={<Ptype/>}></Route>
            <Route exact path='/pages/Pvue' element={<Pvue/>}></Route>
          </Routes>
         </Router> 
    </div>
    )
  }
}

