import React from "react";
import Header from '../general/Header.jsx';


const Specialties = () => {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <h2 className="text-primary">Especialidades</h2>
        <p>Una especialidad para cada necesidad del paciente.</p>
        <ul className="list-group mt-4 shadow rounded overflow-hidden">
          <li className="list-group-item list-group-item-primary d-flex align-items-center fw-bold">
            <i className="bi bi-star-fill text-warning me-2"></i>
            Odontopediatría
            <span className="badge bg-info text-dark ms-auto">Niños</span>
          </li>
          <li className="list-group-item d-flex align-items-center">
            <i className="bi bi-braces me-2 text-primary"></i>
            Ortodoncia
            <span className="badge bg-light text-primary ms-auto">Alineación</span>
          </li>
          <li className="list-group-item d-flex align-items-center">
            <i className="bi bi-droplet-half me-2 text-danger"></i>
            Endodoncia
            <span className="badge bg-danger ms-auto">Raíces</span>
          </li>
          <li className="list-group-item d-flex align-items-center">
            <i className="bi bi-emoji-smile me-2 text-success"></i>
            Periodoncia
            <span className="badge bg-success ms-auto">Encías</span>
          </li>
          <li className="list-group-item d-flex align-items-center">
            <i className="bi bi-scissors me-2 text-secondary"></i>
            Cirugía Oral
            <span className="badge bg-secondary ms-auto">Cirugía</span>
          </li>
          <li className="list-group-item d-flex align-items-center">
            <i className="bi bi-gear-fill me-2 text-dark"></i>
            Implantología
            <span className="badge bg-dark ms-auto">Implantes</span>
          </li>
          <li className="list-group-item d-flex align-items-center">
            <i className="bi bi-arrow-repeat me-2 text-warning"></i>
            Rehabilitación Oral
            <span className="badge bg-warning text-dark ms-auto">Prótesis</span>
          </li>
          <li className="list-group-item d-flex align-items-center">
            <i className="bi bi-brush me-2 text-info"></i>
            Odontología Estética
            <span className="badge bg-info text-dark ms-auto">Estética</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Specialties;
