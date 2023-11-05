import React from 'react';
import './App.css';
// Make sure the path is correct for your Symptom component
import Symptom from './SymptomUI/Symptom'; // Adjust this path as needed

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>TOS (Triage Ordering System)</p>
        {/* The logo and learn react link have been removed */}
      </header>
      {/* Render the Symptom component here */}
      <Symptom />
    </div>
  );
}

export default App;
