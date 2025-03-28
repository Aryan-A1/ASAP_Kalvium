import { useState, useEffect } from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ onToggle, isAvengersMode }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const handleClick = () => {
    setIsAnimating(true);
    onToggle();
  };

  return (
    <div className="theme-toggle-container">
      <div 
        className={`theme-toggle ${isAvengersMode ? 'avengers-active' : 'villains-active'} ${isAnimating ? 'animate' : ''}`}
        onClick={handleClick}
      >
        <div className="toggle-handle">
          {isAvengersMode ? (
            <div className="avengers-icon">🛡️</div>
          ) : (
            <div className="villains-icon">👹</div>
          )}
        </div>
        <div className="labels">
          <span className="avengers-label">AVENGERS</span>
          <span className="villains-label">VILLAINS</span>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;