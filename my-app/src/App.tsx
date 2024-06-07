// App.tsx

import React, { useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import DataAnalysis from './dashboard';

function App() {
  const [isDark, setDarkMode] = useState(false);

  const colorDark = { color: 'white', backgroundColor: 'black' };
  const colorLight = { color: 'black', backgroundColor: 'rgb(240, 240, 240)' };

  const toggle = () => {
    setDarkMode(!isDark);
  };

  return (
    <div>
      <NavBar toggle={toggle} isDark={isDark} />
      <div style={isDark ? colorDark : colorLight}>
        <DataAnalysis />
      </div>
    </div>
  );
}

export default App;
