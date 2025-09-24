import { useNavigate } from 'react-router-dom';
import './Welcome.css';

function Welcome() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/form');
  };

  return (
    <div className="welcome-container">
      <div className="welcome-main">
        <h1>E•G•O</h1>
        <h3>Esencia. Guía. Origen.</h3>
        <button className="start-button" onClick={handleStart}>
          Comienza tu viaje
        </button>
        <h5>By HYPEPRESENCE</h5>
        <h6>Trasciende la Dualidad. Encuentra tu Camino.</h6>
      </div>
      <div className="welcome-footer">
      </div>
    </div>
  );
}

export default Welcome;
