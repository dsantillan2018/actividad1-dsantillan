import Header from "../general/Header";
import React, { useState, useRef } from "react";

function Appointments() {
  const [showToast, setShowToast] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [specialty, setSpecialty] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!specialty || !date || !time) {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 3000);
      return;
    }
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    setSpecialty("");
    setDate("");
    setTime("");
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <h2 className="text-primary">Gestión de Citas</h2>
        <p>Aquí podrás ver y gestionar las citas de los pacientes.</p>
        <div className="card mt-4 shadow-sm">
          <div className="card-body">
            <h5 className="card-title mb-3">Selecciona una fecha para tu cita</h5>
            <form onSubmit={handleSubmit} ref={formRef}>
              <div className="mb-3">
                <label htmlFor="specialty" className="form-label">Especialidad</label>
                <select
                  className="form-select"
                  id="specialty"
                  name="specialty"
                  value={specialty}
                  onChange={e => setSpecialty(e.target.value)}
                  required
                >
                  <option value="">Selecciona una especialidad</option>
                  <option value="Odontopediatría">Odontopediatría</option>
                  <option value="Ortodoncia">Ortodoncia</option>
                  <option value="Endodoncia">Endodoncia</option>
                  <option value="Periodoncia">Periodoncia</option>
                  <option value="Cirugía Oral">Cirugía Oral</option>
                  <option value="Implantología">Implantología</option>
                  <option value="Rehabilitación Oral">Rehabilitación Oral</option>
                  <option value="Odontología Estética">Odontología Estética</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="appointmentDate" className="form-label">Fecha de la cita</label>
                <input
                  type="date"
                  className="form-control"
                  id="appointmentDate"
                  name="appointmentDate"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="appointmentTime" className="form-label">Hora de la cita</label>
                <input
                  type="time"
                  className="form-control"
                  id="appointmentTime"
                  name="appointmentTime"
                  min="08:00"
                  max="18:00"
                  step="3600"
                  value={time}
                  onChange={e => setTime(e.target.value)}
                  pattern="^([0-1][0-9]|2[0-3]):00$"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Agendar</button>
            </form>
          </div>
        </div>
        {/* Toast de éxito y advertencia */}
        <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 1055 }}>
          {showToast && (
            <div className="toast show align-items-center text-bg-success border-0" role="alert" aria-live="assertive" aria-atomic="true">
              <div className="d-flex">
                <div className="toast-body">
                  ¡Cita agendada exitosamente!
                </div>
                <button type="button" className="btn-close btn-close-white me-2 m-auto" aria-label="Close" onClick={() => setShowToast(false)}></button>
              </div>
            </div>
          )}
          {showWarning && (
            <div className="toast show align-items-center text-bg-danger border-0 mt-2" role="alert" aria-live="assertive" aria-atomic="true">
              <div className="d-flex">
                <div className="toast-body">
                  Por favor, completa todos los campos obligatorios.
                </div>
                <button type="button" className="btn-close btn-close-white me-2 m-auto" aria-label="Close" onClick={() => setShowWarning(false)}></button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Appointments;
