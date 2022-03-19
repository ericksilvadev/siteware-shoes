export const useUpdatePrice = (cart: Store.ICart[], id?: number) => {
  let result = {
    totalPrice: 0,
    itemTotalPrice: 0,
    isSaleActive: false,
  };

  cart.reduce((acc, currItem) => {
    if (currItem.product.sale?.take && currItem.quantity >= currItem.product.sale?.take) {
      // Updates 'result' based on item sale
      const remainder = currItem.quantity % currItem.product.sale.take;

      const saleAmount = Math.floor(currItem.quantity / currItem.product.sale.take);

      const itemTotalPrice =
        saleAmount * currItem.product.sale.salePrice + remainder * currItem.product.price;
      acc += itemTotalPrice;

      if (id && currItem.product.id === id) {
        result = { isSaleActive: true, itemTotalPrice, totalPrice: acc };
      }

      result = { ...result, totalPrice: acc };
      return acc;
    }

    // Updates 'result' based on a normal product
    acc += currItem.product.price * currItem.quantity;

    if (id && currItem.product.id === id) {
      result = {
        ...result,
        itemTotalPrice: currItem.product.price * currItem.quantity,
        totalPrice: acc,
      };
    }

    result = {
      ...result,
      totalPrice: acc,
    };

    return acc;
  }, 0);

  return result;
};
