import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div>
      <Navbar />
      {/* <MainContent /> */}
      <Outlet /> 
      {/* <header style={{textAlign: "center"}}>
        React Router example
      </header>
      <Link to="/users">Users</Link> {" | "} <br />
      <Outlet /> */}
    </div>
  );
}

export default App;
