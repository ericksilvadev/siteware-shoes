import { createContext, ReactNode, useEffect, useState } from 'react';

interface IProvider {
  children: ReactNode;
}

interface IStoreContext {
  cart: Store.ICart[];
  setCart: (param: Store.ICart[]) => void;
  totalPrice: number;
  subtotalPrice: number;
  totalQuantity: number;
}

export const StoreContext = createContext({} as IStoreContext);

export const StoreProvider = ({ children }: IProvider) => {
  const [cart, setCart] = useState<Store.ICart[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [subtotalPrice, setSubtotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    // Updates total price and quantity every cart update
    const totalPrice = cart.reduce((acc, curr) => {
      acc += curr.product.promotionPrice * curr.quantity;
      return acc;
    }, 0);
    setTotalPrice(totalPrice);

    const subtotalPrice = cart.reduce((acc, curr) => {
      acc += curr.product.defaultPrice * curr.quantity;
      return acc;
    }, 0);
    setSubtotalPrice(subtotalPrice);

    const totalQuantity = cart.reduce((acc, curr) => {
      acc += curr.quantity;
      return acc;
    }, 0);
    setTotalQuantity(totalQuantity);
  }, [cart]);

  return (
    <StoreContext.Provider
      value={{ cart, setCart, totalPrice, subtotalPrice, totalQuantity }}
    >
      {children}
    </StoreContext.Provider>
  );
};
