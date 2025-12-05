import React from "react";
import Header from '../general/Header.jsx';


const Doctors = () => {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <h2 className="text-primary">Doctores</h2>
        <p>Lista de doctores disponibles en la clínica.</p>
        <ul className="list-group mt-4 shadow rounded overflow-hidden">
          <li className="list-group-item list-group-item-primary d-flex align-items-center fw-bold">
            <i className="bi bi-person-badge-fill text-warning me-2"></i>
            Dra. María López
            <span className="badge bg-warning text-dark ms-auto">Odontopediatría</span>
          </li>
          <li className="list-group-item d-flex align-items-center">
            <i className="bi bi-person-badge-fill text-primary me-2"></i>
            Dr. Juan Pérez
            <span className="badge bg-primary ms-auto">Ortodoncia</span>
          </li>
          <li className="list-group-item d-flex align-items-center">
            <i className="bi bi-person-badge-fill text-danger me-2"></i>
            Dr. Carlos Sánchez
            <span className="badge bg-danger ms-auto">Endodoncia</span>
          </li>
          <li className="list-group-item d-flex align-items-center">
            <i className="bi bi-person-badge-fill text-success me-2"></i>
            Dra. Ana Torres
            <span className="badge bg-success ms-auto">Periodoncia</span>
          </li>
          <li className="list-group-item d-flex align-items-center">
            <i className="bi bi-person-badge-fill text-secondary me-2"></i>
            Dr. Luis Ramírez
            <span className="badge bg-secondary ms-auto">Cirugía Oral</span>
          </li>
          <li className="list-group-item d-flex align-items-center">
            <i className="bi bi-person-badge-fill text-dark me-2"></i>
            Dra. Patricia Gómez
            <span className="badge bg-dark ms-auto">Implantología</span>
          </li>
          <li className="list-group-item d-flex align-items-center">
            <i className="bi bi-person-badge-fill text-info me-2"></i>
            Dr. Jorge Castillo
            <span className="badge bg-warning text-dark ms-auto">Rehabilitación Oral</span>
          </li>
          <li className="list-group-item d-flex align-items-center">
            <i className="bi bi-person-badge-fill text-primary me-2"></i>
            Dra. Laura Mendoza
            <span className="badge bg-success ms-auto">Odontología Estética</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Doctors;
