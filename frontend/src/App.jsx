import { useState } from 'react';
import Avengers from './components/Avengers/Avengers';
import Villains from './components/Villains/Villains';
import ThemeToggle from './components/ThemeToggle';
import ValidationForm from './components/Auth/ValidationForm';
import './index.css';

const App = () => {
  const [isAvengersMode, setIsAvengersMode] = useState(true);
  const [isValidated, setIsValidated] = useState(false);

  const handleToggle = () => {
    setIsAvengersMode(!isAvengersMode);
  };

  const handleValidationSuccess = (userData) => {
    console.log('User validated:', userData);
    setIsValidated(true);
    // Store user data in localStorage or context as needed
  };

  return (
    <div className="app">
      {!isValidated ? (
        <ValidationForm onValidationSuccess={handleValidationSuccess} />
      ) : (
        <>
          <header>
            <div className="container">
              <div className="typewriter">
                <h1>{isAvengersMode ? 'THE MIGHTY AVENGERS' : 'INFAMOUS VILLAINS'}</h1>
              </div>
            </div>
          </header>
          
          <ThemeToggle onToggle={handleToggle} isAvengersMode={isAvengersMode} />
          
          <main className="container">
            {isAvengersMode ? <Avengers /> : <Villains />}
          </main>
        </>
      )}
    </div>
  );
};

export default App;