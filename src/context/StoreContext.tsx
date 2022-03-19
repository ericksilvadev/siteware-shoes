import { createContext, ReactNode, useEffect, useState } from 'react';

import { useUpdatePrice } from '../hooks/useUpdatePrice';

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
    const storageCart = localStorage.getItem('cart');

    if (storageCart) {
      const parseCart = JSON.parse(storageCart);
      setCart(parseCart.cart);
      setTotalPrice(parseCart.totalPrice);
      setSubtotalPrice(parseCart.subtotalPrice);
      setTotalQuantity(parseCart.totalQuantity);
    }
  }, []);

  useEffect(() => {
    // Updates total price and quantity every cart update
    const { totalPrice: totalPriceCalc } = useUpdatePrice(cart);
    setTotalPrice(totalPriceCalc);

    const subtotalPriceCalc = cart.reduce((acc, curr) => {
      acc += curr.product.defaultPrice * curr.quantity;
      return acc;
    }, 0);
    setSubtotalPrice(subtotalPriceCalc);

    const totalQuantityCalc = cart.reduce((acc, curr) => {
      acc += curr.quantity;
      return acc;
    }, 0);
    setTotalQuantity(totalQuantityCalc);

    localStorage.setItem(
      'cart',
      JSON.stringify({
        totalPrice: totalPriceCalc,
        totalQuantity: totalQuantityCalc,
        subtotalPrice: subtotalPriceCalc,
        cart,
      })
    );
  }, [cart]);

  return (
    <StoreContext.Provider
      value={{ cart, setCart, totalPrice, subtotalPrice, totalQuantity }}
    >
      {children}
    </StoreContext.Provider>
  );
};
