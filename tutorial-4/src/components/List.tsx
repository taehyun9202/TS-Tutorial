import React from "react";
import { IState as IProps } from "../App";

const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => (
      <div>
        <p>{person.name}</p>
        <p>{person.age}</p>
        <p>{person.note}</p>
      </div>
    ));
  };
  return (
    <div>
      <p>List</p>
      {renderList()}
    </div>
  );
};

export default List;
