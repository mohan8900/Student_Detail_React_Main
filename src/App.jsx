import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="icon">
        <p>👁️</p>
        </div>
        <h2 className="name">Name: KANMANI U</h2>
        <p className="registration">Registration No: 212221040070</p>
        <button className="button" onClick={toggleDetails}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        {showDetails && (
          <div className="details">
            Status:Student 
            Place:Bargur
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
