// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";

function App() {
  const name = 'Alondra Cordoba';
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [names, setNames] = useState([{
    name: 'Alondra',
    lastname: 'Cordoba',
    age: 20,
    favouriteFood: "Seafood",
    favouriteColor: "Beige",
    counter: 0
  }]);

  return (
    <div className="App">
      <h1>Header</h1>
      <p className='text-color-blue'>Hello world</p>
      <p className='text-color-blue'>Nombre: {name}</p>
      <input type="text" name="firstNumber" onChange={(e) => setNum1(e.target.value)}/>
      <input type="text" name="secondNumber" onChange={(e) => setNum2(e.target.value)}/>
      <button onClick={() => setNames([...names, { name: num1, lastname: num2}])}>Agregar</button>
      {
        names.map((e, i) => (
            <p key={i}>{e.name + " " + e.lastname}</p>
          )
        )
      }

    </div>
  );
}

export default App;
