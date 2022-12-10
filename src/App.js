import { useState } from 'react';
import './App.css';
import Effect from './Components/effect';
import State from './Components/State';
import Contador from './Ejercicio/Contador';
import Stop from './Ejercicio/Stop';
import AppRoutes from './Routes/AppRoutes';

function App() {
  const [count, setCount] = useState(false)
  const [counter, setCounter] = useState(0)



  return (
    <div>
      <State />
      <AppRoutes />
      <Effect />
      <button onClick={() => setCount(!count)}>{!count ? 'Contar' : 'Parar'}</button>
      {count ? <Contador count={counter} setCount={setCounter}/> : <Stop />}
    </div>
  );
}

export default App;
