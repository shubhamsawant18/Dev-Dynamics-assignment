
import { useState } from 'react';
import './App.css';
import DataAnalysis from './dashboard';


function App() {
   const [isDark , setDarkMode] = useState(false);
   
   const colorDark = { color: 'black', backgroundColor: 'white' };
const colorWhite = { color: 'white', backgroundColor: 'black' };
const toggle =()=> {
  setDarkMode(!isDark)
}

  return (
    <div style={isDark? colorDark: colorWhite}>
      <DataAnalysis/>
    </div>
  );
}

export default App;
