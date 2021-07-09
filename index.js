import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Link, NavLink, Switch } from 'react -router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';

const routing = (
  <Router>
    <div>
    <h1>10decoder Welcomes You</h1>
    <Route path="/" component={Home} />
    <Route path="/" component={About} />
    <Route path="/" component={Contact} />
    <Route path="/" component={Blog} />
  </div>
  </Router>
)
ReactDOM.render(routing,document.getElementById('root'));