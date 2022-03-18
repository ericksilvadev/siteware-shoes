export const updateCart = (item: Store.ICart, cart: Store.ICart[]) => {
  const cartItem = cart.find((product) => product.product.id === item.product.id);

  if (item.quantity < 1) item.quantity = 1;

  if (cartItem) {
    const updatedCart = [
      ...cart.filter((product) => product.product.id !== item.product.id),
      item,
    ];

    return updatedCart;
  }

  return [...cart, item];
};
