import React, { useContext, useState } from "react";
import UserContext, { UserState } from "./store";

function ConsumerCoponent() {
  const user = useContext<UserState>(UserContext);

  return (
    <div>
      <div>First: {user.first}</div>
      <div>Last: {user.last}</div>
    </div>
  );
}

function ContextComponent() {
  const [user, setUser] = useState<UserState>({
    first: "Lena",
    last: "Lee",
  });
  return (
    <UserContext.Provider value={user}>
      <ConsumerCoponent />
      <button
        onClick={() =>
          setUser({
            first: "Woojung",
            last: "Lee",
          })
        }
      >
        Change Context
      </button>
    </UserContext.Provider>
  );
}

export default ContextComponent;
