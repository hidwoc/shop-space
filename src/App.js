import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { apiURL } from './services/apiConfig';

function App() {
  useEffect(() => {
    const fetchData = async() => {
      const res = await axios.get(apiURL)
      console.log(res)
    }
    fetchData()
  })
  return (
    <div className="App">
      APP
    </div>
  );
}

export default App;
