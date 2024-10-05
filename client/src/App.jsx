import React from 'react';
import './styles/App.css';

function App() {
  const handleGetStarted = () => {
    window.location.href = import.meta.env.VITE_GITHUB_URL;
  };

  return (
    <div className="app-container">
      <div className="welcome-card">
        <h1 className="welcome-title">Welcome to the Career Growth Hub</h1>
        <p className="welcome-subtitle">Your journey to success starts here.</p>
        <button className="get-started-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
