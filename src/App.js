import './styles/App.css';
import React from 'react';
import { CssBaseline} from "@mui/material"
import { Info } from './components/Info'
import { Navigation } from './components/Navigation';
import { Contacts } from './components/Contacts';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navigation />
      <Info />
      <Contacts />
    </div>
  );
}

export default App;
