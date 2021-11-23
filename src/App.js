import React from 'react'
import Buttons1 from './Components/button';
import './sass/main.scss'
import { Navigator } from './containers/navBar';
import { Menu } from "../src/containers/menu";


const MainApp = () => {

    return (
      <>
      <Navigator/>
        <div className='app-body'>
          <Menu/>
          <h1>Lets get to work</h1>
          <h2>Are we ready for this</h2>
          <h3>for the very last time come on</h3>
          <Buttons1 >this-standings</Buttons1>
        </div>
      </>
    );
}

export default MainApp