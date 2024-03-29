import React, { Component } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddNewHairProfile from './pages/AddNewHairProfile';
import AddNewStyleLog from './pages/AddNewStyleLog';
import AddNewProduct from './pages/AddNewProduct';
import AddNewGoals from './pages/AddNewGoals';
import DisplayGoals from './pages/HairGoals';
import DisplayProducts from './pages/ProductList';
import DisplayLogs from './pages/StyleLog';
import DisplayProfiles from './pages/Profile';



class App extends Component {
  render() {
    return (
      <div>
      <Routes>
        <Route path='/' exact={true} element = { <Home/>}/>
        <Route path='/hairithmetic/profile/new' exact={true} element= { <AddNewHairProfile/>}/>
        <Route path='/hairithmetic/log/new' exact={true} element= {<AddNewStyleLog/>}/>
        <Route path = '/hairithmetic/products/new' exact={true} element = {<AddNewProduct/>}/>
        <Route path = '/hairithmetic/goals/new' exact = {true} element = {<AddNewGoals/>}/>
        <Route path = '/hairithmetic/goals' exact ={true} element = {<DisplayGoals/>}/>
        <Route path = '/hairithmetic/products' exact ={true} element = {<DisplayProducts/>}/>
        <Route path = '/hairithmetic/log' exact = {true} element = {<DisplayLogs/>}/>
        <Route path = '/hairithmetic/profile' exact = {true} element = {<DisplayProfiles/>}/>
      </Routes>
    
      </div>
    );
  }
  }

export default App;
