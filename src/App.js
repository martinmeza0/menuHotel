import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Search from './pages/Search';

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/"  element={<Home></Home>} />
          <Route path="/search"  element={<Search></Search>} />
      </Routes>
    </Router>
  )
}



export default App