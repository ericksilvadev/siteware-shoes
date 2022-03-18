import { createContext, ReactNode, useState } from 'react';

interface IProvider {
  children: ReactNode;
}

interface IStoreContext {
  filter: string | undefined;
  setFilter: (param: string | undefined) => void;
}

export const StoreContext = createContext({} as IStoreContext);

export const StoreProvider = ({ children }: IProvider) => {
  const [filter, setFilter] = useState<string | undefined>();

  return (
    <StoreContext.Provider value={{ filter, setFilter }}>
      {children}
    </StoreContext.Provider>
  );
};
