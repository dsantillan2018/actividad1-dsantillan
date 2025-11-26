import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container container d-flex flex-column align-items-center justify-content-center bg-info bg-opacity-25 rounded-4 p-4">
      <h1 className="chiquiteethos-header">Chiquiteethos</h1>
      <p className="mb-4">Bienvenidos</p>
      <button className="btn btn-primary btn-lg" onClick={() => navigate('/menu')}>
        Ingresar
      </button>
    </div>
  );
}

export default Home;
