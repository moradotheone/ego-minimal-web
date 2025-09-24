import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Greeting.css';

interface UserInfo {
  name: string;
  birthDate: string; // Changed from birthYear
  birthHour: string;
  birthPlace: string;
  email: string;
}

function Greeting() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    } else {
      // If no user info, redirect to form. This prevents accessing the page directly.
      navigate('/form');
    }
  }, [navigate]);

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const handleRestart = () => {
    localStorage.removeItem('userInfo');
    navigate('/');
  };

  if (!userInfo) {
    // This will be briefly shown while redirecting
    return <div className="loading-container">Cargando...</div>;
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>¡Hola, {userInfo.name}!</h1>
        <p>Tu aventura de auto-descubrimiento comienza ahora. Elige una opción para empezar.</p>
      </header>

      <div className="dashboard-menu">
        <div className="menu-card" onClick={() => handleNavigate('/chart')}>
            <div className="card-icon">🔮</div>
            <h3>Mi Carta</h3>
            <p>Descubre tu carta astral y lo que los astros dicen de ti.</p>
        </div>
        <div className="menu-card" onClick={() => handleNavigate('/wheel')}>
            <div className="card-icon">☸️</div>
            <h3>Mi Rueda de la Vida</h3>
            <p>Evalúa y visualiza el balance en las áreas clave de tu vida.</p>
        </div>
        <div className="menu-card" onClick={() => handleNavigate('/hero-journey')}>
            <div className="card-icon">🗺️</div>
            <h3>Mi Viaje del Héroe</h3>
            <p>Traza tu camino personal de crecimiento y transformación.</p>
        </div>
      </div>

      <div className="user-summary">
        <h4>Resumen de tus Datos</h4>
        <ul>
          <li><strong>Fecha de Nacimiento:</strong> {userInfo.birthDate}</li>
          <li><strong>Hora:</strong> {userInfo.birthHour}</li>
          <li><strong>Lugar:</strong> {userInfo.birthPlace}</li>
          <li><strong>Email:</strong> {userInfo.email}</li>
        </ul>
        <button onClick={handleRestart} className="restart-button">
          Comenzar de Nuevo
        </button>
      </div>
    </div>
  );
}

export default Greeting;
