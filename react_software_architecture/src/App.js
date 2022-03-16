import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/Home';
import Postpage from './pages/post';

function App() {
  return (
    <BrowserRouter>
        <h1>Building a Server side sample</h1>
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/about" >About</Link>
          </li>
          <li>
            <Link to="/post" >Posts</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" >
            <About />
          </Route>
          <Route>
            <Postpage path="/post" />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
