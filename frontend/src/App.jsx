import { useState } from 'react';
import './index.css';
import ThemeToggle from './components/ThemeToggle';
import Avengers from './components/Avengers/Avengers';
import Villains from './components/Villains/Villains';

const App = () => {
  const [isAvengersMode, setIsAvengersMode] = useState(true);

  const handleToggle = () => {
    setIsAvengersMode(!isAvengersMode);
  };

  return (
    <div className="app">
      <header>
        <div className="container">
          <div className="typewriter">
            <h1>{isAvengersMode ? 'The Mighty Avengers' : 'Infamous Villains'}</h1>
          </div>
        </div>
      </header>
      
      <ThemeToggle onToggle={handleToggle} isAvengersMode={isAvengersMode} />
      
      <main className="container">
        {isAvengersMode ? <Avengers /> : <Villains />}
      </main>
    </div>
  );
};

export default App;