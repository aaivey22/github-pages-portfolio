import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './pages/About/index';
import Experience from './pages/Experience/index';
import Navbar from './components/Navbar';
import Portfolio from './pages/Portfolio/index';
import Contact from './pages/Contact/index';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <Router>
    <CssBaseline />
      <div className="Main">
        <Navbar />
        <Switch>
          <Route path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
