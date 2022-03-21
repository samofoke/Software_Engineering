import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from '../pages/Home';
import PostPage from '../pages/Post';
import AboutPage from '../pages/About';
import styled from 'styled-components';


const AddGreen = styled.h1`
  color: green;
`;

function App() {
  return (
    <>
      <div>
        <AddGreen>Adding Styled Components on client side</AddGreen>  
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
