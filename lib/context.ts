import React from "react";
import { getMe } from "../types/api";

const store = {
  userQuery: null
};

interface IProps {
  userQuery: getMe | null | undefined;
}

export const { Provider, Consumer } = React.createContext<IProps>(store);
