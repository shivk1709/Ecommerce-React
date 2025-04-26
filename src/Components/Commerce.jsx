import React from 'react'
import { Provider } from "react-redux";
import Header from './Header';
import { Outlet } from 'react-router-dom';


function Commerce() {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Commerce