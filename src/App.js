import React from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About/index';
import Experience from './pages/Experience/index';
import Navbar from './components/Navbar';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <div className="Main">
      <CssBaseline />
      <Router>
        <div>
        <Navbar />
        <Link to="/" />
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/experience" component={Experience} />
        </div>
      </Router>
    </div>
  );
}

export default App;
