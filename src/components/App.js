import React from 'react'
import Navbar from './Navbar';
import "../styles/app.css";
import AsideNavigation from './AsideNavigation';
import Titles from './Titles';

function App() {
  return (
    <div>
      <Navbar/>
      <AsideNavigation/>
      <Titles/>
    </div>
  )
}

export default App;