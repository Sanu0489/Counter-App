import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const increment = ()=>{

   for(let i = 0; i< 5; i++){ 
     setCounter(count => count +1);
    //setCounter((prev)=> prev + 1);
    console.warn(counter);
    alert(counter);
   }
   
  }

  return (
    <div className="App">
      <button onClick={increment}>increment</button>
      <br/>
      {counter}
    </div>
  );
}

export default App;
