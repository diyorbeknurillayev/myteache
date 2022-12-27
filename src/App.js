import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Comments from './pages/Comments'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [state, setState] = useState(true)
  return (
    <div className={`${state ? 'blablabla' : 'bla_2'}`}>
      <Header state={state} setState={setState} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/comments' element={<Comments />} />
      </Routes>
    </div>
  );
}

export default App;
