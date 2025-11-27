
import Header from '../general/Header.jsx';

function Menu() {
  return (
    <>
      <Header />
      <div className="container mt-5 pt-5">
        <h1 className="chiquiteethos-header">Chiquiteethos</h1>
        <p className="lead">¡Sonrisas sanas y felices para tus pequeños en Chiquiteethos, tu clínica de odontopediatría de confianza!</p>
        <div className="row mt-4">
          <div className="col-md-4 mb-3">
            <div className="card h-100 border-primary shadow text-center">
              <div className="card-body">
                <h5 className="card-title text-primary">Salud Bucal Infantil</h5>
                <p className="card-text">La odontopediatría se encarga de la prevención y tratamiento de enfermedades bucales en niños, asegurando un desarrollo saludable de sus dientes y encías.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100 border-primary shadow text-center">
              <div className="card-body">
                <h5 className="card-title text-primary">Primera Visita al Dentista</h5>
                <p className="card-text">Se recomienda que los niños visiten al odontopediatra al cumplir su primer año para detectar a tiempo cualquier anomalía y recibir orientación sobre higiene oral.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100 border-primary shadow text-center">
              <div className="card-body">
                <h5 className="card-title text-primary">Selladores y Fluoruros</h5>
                <p className="card-text">Los selladores y fluoruros son tratamientos preventivos que ayudan a proteger los dientes de los niños contra las caries y fortalecen el esmalte dental.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
