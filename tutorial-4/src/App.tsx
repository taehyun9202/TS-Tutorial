import React, { useState } from "react";
import AddtoList from "./components/AddtoList";
import List from "./components/List";

export interface IState {
  people: {
    name: string;
    age: number;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    { name: "Tyler", age: 29, note: "the owner of the group" },
  ]);

  console.log(people);
  return (
    <div className="App">
      <p>People invited to group </p>
      <List people={people} />
      <AddtoList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
