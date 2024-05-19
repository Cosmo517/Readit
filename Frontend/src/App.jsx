import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { Dashboard } from './Pages/Dashboard';
import { Login } from './Pages/login';
import { Register } from './Pages/Register';
import { ResetPassword } from './Pages/ResetPassword';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Dashboard/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/ResetPassword' element={<ResetPassword/>} />
      </Routes>
    </Router>
  )
}

export default App
