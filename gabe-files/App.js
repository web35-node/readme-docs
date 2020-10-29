import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
function App() {
  const [message, setm] = useState('')
  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setm(data.message))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        {
          message
        }
      </header>
    </div>
  );
}
export default App;