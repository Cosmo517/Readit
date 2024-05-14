import React, {useState, useEffect} from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { Dashboard } from './Pages/Dashboard';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Dashboard/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
      </Routes>
    </Router>
  )
}

export default App
