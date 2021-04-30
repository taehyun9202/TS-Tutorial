import { createContext } from "react";

const initialState = {
  first: "Ttyler",
  last: "Nam",
};

export type UserState = typeof initialState;

const context = createContext<UserState>(initialState);

export default context;
