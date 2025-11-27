import './Home.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container container d-flex flex-column align-items-center justify-content-center">
      <h1 className="chiquiteethos-header">Chiquiteethos</h1>
      <i className="bi bi-emoji-smile mb-4 fs-1 bienvenidos-text" title="Diente"></i>
      <button className="btn btn-primary btn-lg" onClick={() => navigate('/menu')}>
        Ingresar
      </button>
    </div>
  );
}

export default Home;
