import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import PostPage from './pages/Post';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/post" >Posts</Link>
          </li>
          <li>
            <Link to="/about" >About</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/post' element={<PostPage />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
