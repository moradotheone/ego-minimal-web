import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Placeholder.css';

function MyHeroJourney() {
  const navigate = useNavigate();

  return (
    <div className="placeholder-container">
      <h2>Mi Viaje del Héroe</h2>
      <p>Aquí podrás trazar tu viaje del héroe personal.</p>
      <button onClick={() => navigate('/greeting')}>Volver</button>
    </div>
  );
}

export default MyHeroJourney;
