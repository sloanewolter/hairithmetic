import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import AuthService from "./services/auth.service";
import AddNewHairProfile from './pages/AddNewHairProfile';
import AddNewStyleLog from './pages/AddNewStyleLog';
import AddNewProduct from './pages/AddNewProduct';
import AddNewGoals from './pages/AddNewGoals';
import DisplayGoals from './pages/HairGoals';
import DisplayProducts from './pages/ProductList';
import DisplayLogs from './pages/StyleLog';
import Login from './pages/Login';
import Register from './pages/Register';
import BoardUser from './pages/BoardUser';
import BoardModerator from './pages/BoardModerator';
import BoardAdmin from './pages/BoardAdmin';
import EventBus from "./common/EventBus";



function App() {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };

    return (
      <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          bezKoder
        </Link>
        <div className="navbar-nav mr-auto">
          {showModeratorBoard && (
            <li className="nav-item">
              <Link to={"/mod"} className="nav-link">
                Moderator Board
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin Board
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>

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
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/user" element={<BoardUser/>} />
        <Route path="/mod" element={<BoardModerator/>} />
        <Route path="/admin" element={<BoardAdmin/>} />
      </Routes>
    
      </div>
      </div>
    );
  }
  

export default App;
