import { Routes, Route } from 'react-router-dom';
import Home from './components/main/Home.jsx';
import Menu from './components/main/Menu.jsx';
import './App.css';

function App() {
  return (
    <div id="principal">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App
