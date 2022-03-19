import { priceFormatter } from '../../helpers/priceFormatter';
import { CartItem } from '../CartItem';
import { Container } from './styles';

interface IDefaultCart {
  cart: Store.ICart[];
  subtotalPrice: number;
  totalPrice: number;
}

export const DefaultCart: React.FC<IDefaultCart> = ({
  cart,
  subtotalPrice,
  totalPrice,
}) => {
  return (
    <Container>
      <div className="products-list">
        {cart.map((item) => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </div>

      <aside className="resume default-box">
        <h1>Resumo da compra</h1>

        <div className="price-info">
          <span>Subtotal</span>
          <strong>{priceFormatter(subtotalPrice)}</strong>
        </div>

        <div className="price-info">
          <span>Descontos</span>
          <strong>{priceFormatter(subtotalPrice - totalPrice)}</strong>
        </div>

        <hr />

        <div className="price-info total">
          <span>Total</span>
          <strong>{priceFormatter(totalPrice)}</strong>
        </div>

        <button type="button" className="green">
          Finalizar compra
        </button>
      </aside>
    </Container>
  );
};
