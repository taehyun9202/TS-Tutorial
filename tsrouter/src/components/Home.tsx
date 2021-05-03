import React, { useState } from "react";
import { Link } from "react-router-dom";
function Home() {
  const [index, setIndex] = useState<string[]>([]);
  const [inputText, setInputText] = useState<string>("");
  return (
    <div>
      <h1>Home</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={() => {
          setIndex([...index, inputText]);
          setInputText("");
        }}
      >
        Add Index
      </button>
      {index.map((i) => (
        <Link to={`/index/${i}`}>
          <p>{i}</p>
        </Link>
      ))}
    </div>
  );
}

export default Home;
