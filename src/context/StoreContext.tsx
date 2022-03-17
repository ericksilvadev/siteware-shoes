import { createContext, ReactNode } from 'react';

export const StoreContext = createContext({});

interface IProvider {
  children: ReactNode;
}

export const StoreProvider = ({ children }: IProvider) => {
  return <StoreContext.Provider value={{}}>{children}</StoreContext.Provider>;
};
