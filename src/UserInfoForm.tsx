import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserInfoForm.css';

function UserInfoForm() {
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '', // Changed from birthYear to birthDate
    birthHour: '',
    birthPlace: '',
    email: '',
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save user info to localStorage
    localStorage.setItem('userInfo', JSON.stringify(formData));
    // Navigate to the greeting page
    navigate('/greeting');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Ingresa tus datos</h2>
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="date" // Changed input type to date
          name="birthDate" // Changed name to birthDate
          placeholder="Fecha de nacimiento"
          value={formData.birthDate}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="birthHour"
          placeholder="Hora de nacimiento (e.g., 14:30)"
          value={formData.birthHour}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="birthPlace"
          placeholder="Lugar de nacimiento"
          value={formData.birthPlace}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button type="submit">Guardar y Continuar</button>
      </form>
    </div>
  );
}

export default UserInfoForm;
