import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from '../pages/Home';
import PostPage from '../pages/Post';
import AboutPage from '../pages/About';

function App() {
  return (
    <>
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
        <Route exact path='/' element={<HomePage />}/>
        <Route path='/post' element={<PostPage />}/>
        <Route path='/about' element={<AboutPage />}/>
      </Routes>
    </>
  );
}

export default App;
