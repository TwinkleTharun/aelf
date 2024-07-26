import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [prompt, setPrompt] = useState('');
  const [contract, setContract] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/generate', { prompt });
      setContract(response.data.contract);
      setUrl(response.data.url);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1 className="title">Natural Language Smart Contract Generator</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your contract requirements..."
          className="textarea"
        />
        <button type="submit" className="button">Generate</button>
      </form>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : error ? (
        <p className="error">Error: {error}</p>
      ) : contract ? (
        <div className="contract-container">
          <h2 className="contract-title">Generated Smart Contract:</h2>
          <pre className="contract-code">{contract}</pre>
          <p className="contract-url">Contract URL: <a href={url} target="_blank" rel="noopener noreferrer" className="url-link">{url}</a></p>
        </div>
      ) : null}
    </div>
  );
}

export default App;