import { Routes, Route } from 'react-router-dom';
import Home from './components/main/Home.jsx';
import Footer from './components/general/Footer.jsx';
import { useLocation } from 'react-router-dom';
import Menu from './components/main/Menu.jsx';
import Appointments from './components/appointments/Appointments.jsx';
import Doctors from './components/doctors/Doctors.jsx';
import Specialties from './components/specialties/Specialties.jsx';
import './App.css';

function App() {
  const location = useLocation();
  return (
    <div id="principal">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/specialties" element={<Specialties />} />
      </Routes>
      {location.pathname !== '/' && <Footer />}
    </div>
  );
}

export default App
