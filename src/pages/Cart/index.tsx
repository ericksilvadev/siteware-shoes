import { useContext } from 'react';

import { StoreContext } from '../../context/StoreContext';
import { priceFormatter } from '../../helpers/priceFormatter';
import trashIcon from '/src/assets/icons/icon-trash.svg';

import { Container, Content } from './styles';
import { CartItem } from '../../components/CartItem';

export const Cart = () => {
  const { cart, totalPrice, subtotalPrice } = useContext(StoreContext);
  return (
    <Container>
      <Content>
        <div className="heading">
          <h1>Meu Carrinho</h1>
          <button type="button" className="clear">
            <img src={trashIcon} alt="Limpar carrinho" className="icon" />
            <span>Limpar carrinho</span>
          </button>
        </div>
        <section className="products-area">
          <div className="products-list">
            {cart.map((item) => (
              <CartItem item={item} />
            ))}
          </div>
          <aside className="resume">
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
        </section>
      </Content>
    </Container>
  );
};
