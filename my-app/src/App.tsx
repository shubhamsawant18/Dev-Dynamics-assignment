// App.tsx

import React, { useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import DataAnalysis from './dashboard';
// Import other components as needed
import Home from './Home'; // Example import, replace with your components


function App() {
  const [isDark, setDarkMode] = useState(false);

  const colorDark = { color: 'black', backgroundColor: 'white' };
  const colorWhite = { color: 'white', backgroundColor: 'black' };
  const toggle = () => {
    setDarkMode(!isDark);
  };

  return (
    <div style={isDark ? colorDark : colorWhite}>
   <NavBar/>
   <DataAnalysis/>
    </div>
  );
}

export default App;
