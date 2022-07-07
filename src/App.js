import React from 'react';
import MyNavbar from './components/navbar/MyNavbar';
import "./App.scss";
import Header from './components/header/Header';
import Card from './components/cards/Card';
import {data} from "./data"

const App = () => {
  return (
    <div>
      <MyNavbar/>
      <Header/>
      <Card data={data}/>
    </div>
    
  )
}

export default App           