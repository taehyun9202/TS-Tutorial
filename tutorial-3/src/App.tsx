import { Interface } from "node:readline";
import React from "react";
import "./App.css";
import ContextComponent from "./components/ContextComponent";
import EffectComponent from "./components/EffectComponent";
import ReducerComponent from "./components/ReducerComponent";
import RefComponent from "./components/RefComponent";
import StateComponent from "./components/StateComponent";

function App() {
  return (
    <div className="App">
      <h1>useState</h1>
      <StateComponent />
      <h1>useEffect</h1>
      <EffectComponent />
      <h1>useContext</h1>
      <ContextComponent />
      <h1>useReducer</h1>
      <ReducerComponent />
      <h1>useRef</h1>
      <RefComponent />
      <Interface />
    </div>
  );
}

export default App;
