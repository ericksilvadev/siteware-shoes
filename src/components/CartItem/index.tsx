import { useContext, useEffect, useState } from 'react';

import { priceFormatter } from '../../helpers/priceFormatter';
import { StoreContext } from '../../context/StoreContext';
import { useUpdatePrice } from '../../hooks/useUpdatePrice';
import { SaleLabel } from '../SaleLabel';
import trashIcon from '/src/assets/icons/icon-trash.svg';

import { Container } from './styles';

interface ICartItem {
  item: Store.ICart;
}

export const CartItem: React.FC<ICartItem> = ({ item }) => {
  const [itemTotalPrice, setItemTotalPrice] = useState(0);
  const [isSaleActive, SetIsSaleActive] = useState(false);
  const { cart, setCart } = useContext(StoreContext);

  useEffect(() => {
    const { itemTotalPrice: itemTotal, isSaleActive: sale } = useUpdatePrice(
      cart,
      item.product.id
    );

    setItemTotalPrice(itemTotal);
    SetIsSaleActive(sale);
  }, [cart]);

  const handleUpdateQuantity = (quantity: number) => {
    if (quantity < 1) return;
    if (quantity > item.product.inventory) return;

    const itemIndex = cart.findIndex(
      (cartItem) => cartItem.product.id === item.product.id
    );

    // Updates cart array without changing it's order
    setCart([
      ...cart.slice(0, itemIndex),
      { ...item, quantity },
      ...cart.slice(itemIndex + 1, cart.length),
    ]);
  };

  const handleDeleteItem = () => {
    setCart([...cart.filter((cartItem) => cartItem.product.id !== item.product.id)]);
  };

  return (
    <Container className="default-box">
      {item.product.sale && <SaleLabel product={item.product} />}

      <div className="main-content">
        <div>
          <img src={item.product.image} alt={item.product.name} />

          <article className="info">
            <h1>{item.product.name}</h1>
            <span>
              Cor <strong>{item.color}</strong>
            </span>

            <br />

            <span>
              Tamanho <strong>{item.size}</strong>
            </span>

            <br />

            <span>
              Vendido e entregue por <strong>Siteware Shoes</strong>
            </span>
          </article>
        </div>

        <button type="button" className="delete-item" onClick={handleDeleteItem}>
          <img src={trashIcon} alt="Remover" className="icon" />
        </button>
      </div>

      <hr />

      <div className="quantity-and-price">
        <div className="quantity-change">
          <button type="button" onClick={() => handleUpdateQuantity(item.quantity - 1)}>
            <span>-</span>
          </button>

          <input type="text" disabled value={item.quantity} />

          <button type="button" onClick={() => handleUpdateQuantity(item.quantity + 1)}>
            <span>+</span>
          </button>
        </div>

        {isSaleActive && (
          <span
            className={
              item.product.category === 'socks' ? 'sale-info purple' : 'sale-info'
            }
          >
            Você está levando <strong>{item.product.sale?.take}</strong> e pagando{' '}
            <strong>{item.product.sale?.pay}</strong>
          </span>
        )}

        <span className="price-info">
          Valor total destes produtos <strong>{priceFormatter(itemTotalPrice)}</strong>
        </span>
      </div>
    </Container>
  );
};
