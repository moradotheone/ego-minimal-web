import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Placeholder.css';

function MyChart() {
  const navigate = useNavigate();

  return (
    <div className="placeholder-container">
      <h2>Mi Carta</h2>
      <p>Aquí se mostrará tu carta astral.</p>
      <button onClick={() => navigate('/greeting')}>Volver</button>
    </div>
  );
}

export default MyChart;
