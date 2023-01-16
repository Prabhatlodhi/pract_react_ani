import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(10);

  const handleClick = ()=>{
     setCount(count + 1);
  }


  return (
    <div>
      <button onClick={handleClick} >Add Animal</button>
      <p> Number of animal is ::{count}</p>
    </div>
  );
}

export default App;
