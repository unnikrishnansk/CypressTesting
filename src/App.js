import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setcounter] = useState(0);

  
  return (
    <div className="App">
      <h2>Counter is {counter}</h2>
      <button 
      className='incrementcount'
      onClick={() => setcounter((prev)=>prev+1)}
      >Inc</button>
      <button 
      className='decrementcount'
      onClick={() => setcounter((prev)=>prev-1)}
      >Dec</button>
    </div>
  );
}

export default App;
