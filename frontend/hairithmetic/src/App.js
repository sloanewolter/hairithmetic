import React, { Component } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddNewHairProfile from './pages/AddNewHairProfile';


class App extends Component {
  render() {
    return (
      <div>
      <Routes>
        <Route path='/' exact={true} element = { <Home/>}/>
        <Route path='/hairithmetic/profile/new' exact={true} element= { <AddNewHairProfile/>}/>
      </Routes>
    
      </div>
    );
  }
  }

export default App;
