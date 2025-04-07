import { useState } from 'react';
import './ValidationForm.css';

const ValidationForm = ({ onValidationSuccess }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    age: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = 'Username required';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (formData.age < 13) newErrors.age = 'Must be 13+ years old';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onValidationSuccess(formData);
    }
  };

  return (
    <div className="validation-overlay">
      <div className="validation-form marvel-theme">
        <h2>Enter the Marvel Universe</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input 
              type="text" 
              name="username"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
            />
            {errors.username && <span className="error">{errors.username}</span>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Age</label>
            <input 
              type="number" 
              name="age"
              value={formData.age}
              onChange={(e) => setFormData({...formData, age: e.target.value})}
            />
            {errors.age && <span className="error">{errors.age}</span>}
          </div>

          <button type="submit" className="marvel-button">
            Enter Site
          </button>
        </form>
      </div>
    </div>
  );
};

export default ValidationForm;