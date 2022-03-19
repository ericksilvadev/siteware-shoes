export const useUpdatePrice = (cart: Store.ICart[], id?: number) => {
  let result = {
    totalPrice: 0,
    itemTotalPrice: 0,
    isSaleActive: false,
  };

  cart.reduce((acc, curr) => {
    if (curr.product.sale?.take && curr.quantity >= curr.product.sale?.take) {
      // Updates total price according to item sale
      const remainder = curr.quantity % curr.product.sale.take;

      const saleAmount = curr.quantity / curr.product.sale.take;

      const itemTotalPrice =
        saleAmount * curr.product.sale.salePrice +
        remainder * curr.product.promotionPrice;
      acc += itemTotalPrice;

      if (id && curr.product.id === id) {
        result = { isSaleActive: true, itemTotalPrice, totalPrice: acc };
      }

      result = { ...result, totalPrice: acc };
      return acc;
    }

    acc += curr.product.promotionPrice * curr.quantity;

    if (id && curr.product.id === id) {
      result = {
        ...result,
        itemTotalPrice: curr.product.promotionPrice * curr.quantity,
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
