import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pattern, setPattern] = useState('');
  const [string, setString] = useState('');
  const [matches, setMatches] = useState([]);

  const findMatches = async () => {
    try {
      const res = await axios.post('http://localhost:5000/regex', { pattern, string });
      setMatches(res.data.matches);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="App">
      <label for="pattern">The engine supports literals and alternation via the "|" (pipe) symbol.</label>
      <input 
        placeholder="Enter pattern" 
        id='pattern'
        value={pattern} 
        onChange={(e) => setPattern(e.target.value)} 
      />
      <textarea 
        placeholder="Enter string" 
        rows={5}
        value={string} 
        onChange={(e) => setString(e.target.value)} 
      />
      <button onClick={findMatches}>Find Matches</button>
      <h2>Matches: {matches}</h2>
      <ul>
        {matches.map((match, index) => <li key={index}>{match}</li>)}
      </ul>
    </div>
  );
}

export default App;
