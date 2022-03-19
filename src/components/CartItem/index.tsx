import { Container } from './styles';
import { priceFormatter } from '../../helpers/priceFormatter';
import trashIcon from '/src/assets/icons/icon-trash.svg';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

interface ICartItem {
  item: Store.ICart;
}

export const CartItem: React.FC<ICartItem> = ({ item }) => {
  const { cart, setCart } = useContext(StoreContext);

  const handleUpdateQuantity = (quantity: number) => {
    if (quantity < 1) quantity = 1;
    setCart([
      ...cart.filter((cartItem) => cartItem.product.id !== item.product.id),
      { ...item, quantity },
    ]);
  };

  const handleDeleteItem = () => {
    setCart([...cart.filter((cartItem) => cartItem.product.id !== item.product.id)]);
  };

  return (
    <Container>
      {item.product.sale && (
        <span
          className={
            item.product.category === 'socks' ? 'sale-label purple' : 'sale-label'
          }
        >{`Leve ${item.product.sale.take} Pague ${item.product.sale.pay}`}</span>
      )}

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

        {item.product.sale && (
          <span
            className={
              item.product.category === 'socks' ? 'sale-info purple' : 'sale-info'
            }
          >
            Você está levando <strong>{item.product.sale.take}</strong> e pagando{' '}
            <strong>{item.product.sale.pay}</strong>
          </span>
        )}

        <span className="price-info">
          Valor total destes produtos{' '}
          <strong>{priceFormatter(item.quantity * item.product.promotionPrice)}</strong>
        </span>
      </div>
    </Container>
  );
};
