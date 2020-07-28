import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import About from './pages/about';
import Navbar from './components/Navbar';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <Router>
      <div className="App">
        <CssBaseline />
        <div>
          <Navbar />
          <Route exact path="/" component={About} />
        </div>
      </div>
    </Router>
  );
}

export default App;
