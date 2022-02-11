import React, {useState} from "react";
import "./style.css";

export default function App() {
  let fechaInitial = new Date().toString();
  const [count, setCount] = useState(0);
  const [fecha, setFecha] = useState(fechaInitial);

  const handleClick = ()=>{

    setCount(count+1);
    setFecha(new Date().toString());

  }
  return (
    <div>
      <p>numero de clicks: {count} - {fecha}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
