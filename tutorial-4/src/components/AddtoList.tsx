import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddtoList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: 0,
    note: "",
  });

  const [error, setError] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (): void => {
    if (!input.name || !input.age) {
      setError("No name or age entered");
    } else {
      setPeople([...people, input]);
      setInput({ name: "", age: 0, note: "" });
    }
  };

  return (
    <div>
      <p>Add to List</p>
      <input
        type="text"
        placeholder="name"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="number"
        placeholder="age"
        value={input.age}
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        placeholder="note"
        value={input.note}
        onChange={handleChange}
        name="note"
      />

      <button onClick={() => handleSubmit()}>Add to List</button>
      {error.length > 0 && <p>{error}</p>}
    </div>
  );
};

export default AddtoList;
