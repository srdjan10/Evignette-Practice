import { createContext, useContext } from "react";

export const contextVignette = createContext({});

export const useVignette = () => {
  return useContext(contextVignette);
};

const ContextShare = ({ children }) => {
  return (
    <contextVignette.Provider value={{}}>{children}</contextVignette.Provider>
  );
};

export default ContextShare;
