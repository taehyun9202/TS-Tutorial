import React, { useState } from "react";

function StateComponent() {
  const [array, setArray] = useState<number[]>([]);
  const [name, setName] = useState<string | null>(null);
  return (
    <div>
      <div>
        <button onClick={() => setArray([...array, array.length + 1])}>
          Add to Array
        </button>
        {JSON.stringify(array)}
      </div>
      <div>
        <button onClick={() => setName("Tyler")}>Set Name</button>
        {JSON.stringify(name)}
      </div>
    </div>
  );
}

export default StateComponent;
