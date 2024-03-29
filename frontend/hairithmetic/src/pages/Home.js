import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
    <h1>Welcome to Hairithmetic!</h1>
    <div className = "home-nav-container">
            <div>
                <Link to ="/hairithmetic/profile">My Hair Profile</Link>
            </div>
            <div>
                <Link to ="/hairithmetic/profile/new">Add Hair Profile</Link>
            </div>
            <div>
                <Link to ="/hairithmetic/products">My Product List</Link>
            </div>
            <div>
                <Link to ="/hairithmetic/products/new">Add a Product</Link>
            </div>
            <div>
                <Link to ="/hairithmetic/log">My Style Log</Link>
            </div>
            <div>
                <Link to ="/hairithmetic/log/new">Add a Style Log Entry</Link>
            </div>
            <div>
                <Link to ="/hairithmetic/goals">My Hair Goals</Link>
            </div>
            <div>
                <Link to ="/hairithmetic/goals/new">Add New Hair Goals</Link>
            </div>
        </div>
    </div>
  )
}

export default Home