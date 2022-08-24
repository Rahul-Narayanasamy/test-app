import React from 'react';

import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

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
