import React, { Component } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddNewHairProfile from './pages/AddNewHairProfile';
import AddNewStyleLog from './pages/AddNewStyleLog';
import AddNewProduct from './pages/AddNewProduct';


class App extends Component {
  render() {
    return (
      <div>
      <Routes>
        <Route path='/' exact={true} element = { <Home/>}/>
        <Route path='/hairithmetic/profile/new' exact={true} element= { <AddNewHairProfile/>}/>
        <Route path='/hairithmetic/log/new' exact={true} element= {<AddNewStyleLog/>}/>
        <Route path = '/hairithmetic/products/new' exact={true} element = {<AddNewProduct/>}/>
      </Routes>
    
      </div>
    );
  }
  }

export default App;
