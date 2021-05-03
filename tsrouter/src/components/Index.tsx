import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";

type Props = {
  indexId: string;
};

const Index = ({ match }: RouteComponentProps<Props>) => {
  const { indexId } = match.params;
  console.log(match.params);
  return (
    <div>
      <h1>Index number {indexId}</h1>
      <Link to={`/`}>
        <p>Go home</p>
      </Link>
    </div>
  );
};

export default Index;
