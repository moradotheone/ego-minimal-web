import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Placeholder.css';

function MyWheelOfLife() {
  const navigate = useNavigate();

  return (
    <div className="placeholder-container">
      <h2>Mi Rueda de la Vida</h2>
      <p>Aquí podrás evaluar y visualizar tu rueda de la vida.</p>
      <button onClick={() => navigate('/greeting')}>Volver</button>
    </div>
  );
}

export default MyWheelOfLife;
