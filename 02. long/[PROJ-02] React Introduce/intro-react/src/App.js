import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import './App.css';
import Home from './pages/Home'
import Info from './pages/Info'

function App() {
  return (
    <div className='App'>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/info">Info</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
      </Routes>

    </div>
  );
}

export default App;