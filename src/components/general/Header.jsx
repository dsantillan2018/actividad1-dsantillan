import { Link, useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-primary fixed-top odontopediatria-bg"
    >
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <button className="btn btn-home-transparent me-4" type="button" onClick={() => navigate('/menu')}>
            <i className="bi bi-house-door-fill me-2"></i> Home
          </button>
        </div>
        <ul className="navbar-nav flex-row gap-4 mx-auto">
          <li className="nav-item">
            <Link to="#" className="nav-link text-white fw-bold">
              Especialidades
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link text-white fw-bold">
              Doctores
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/appointments" className="nav-link text-white fw-bold">
              Citas
            </Link>
          </li>
        </ul>
        <div className="d-flex align-items-center">
          <button className="btn btn-home-transparent me-2" type="button" onClick={handleLogout}>
            <i className="bi bi-box-arrow-right me-2"></i> Salir
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
