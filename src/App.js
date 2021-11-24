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
        </div>
      </>
    );
}

export default MainApp