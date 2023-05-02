
import './App.css';

import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/Login" element={ <Login/> } />
        <Route path="/Registration" element={ <Registration/> } />
      </Routes>
    </div>
  )
}

export default App
