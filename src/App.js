import React from 'react'
import './sass/main.scss'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Navigator } from './containers/navBar';
import { Menu } from "../src/containers/menu";
import Login from '../src/containers/login'


const MainApp = () => {

    return (
      <>
      <Navigator/>
        <div className='app-body'>
          <Menu/>
        </div>
        <Router>
         <Routes>
           <Route exact path='/login' element={<Login/>}/>
         </Routes>
        </Router>
      </>
    );
}

export default MainApp