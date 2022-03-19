import { useContext } from 'react';

import { StoreContext } from '../../context/StoreContext';
import trashIcon from '/src/assets/icons/icon-trash.svg';

import { Container, Content } from './styles';
import { DefaultCart } from '../../components/DefaultCart';
import { EmptyCart } from '../../components/EmptyCart';

export const Cart = () => {
  const { cart, totalPrice, subtotalPrice, setCart } = useContext(StoreContext);

  return (
    <Container>
      <Content className="default-box">
        <div className="heading">
          <h1>Meu Carrinho</h1>

          <button type="button" className="clear" onClick={() => setCart([])}>
            <img src={trashIcon} alt="Limpar carrinho" className="icon" />
            <span>Limpar carrinho</span>
          </button>
        </div>

        {cart.length ? (
          <DefaultCart
            cart={cart}
            subtotalPrice={subtotalPrice}
            totalPrice={totalPrice}
          />
        ) : (
          <>
            <hr />
            <EmptyCart />
          </>
        )}
      </Content>
    </Container>
  );
};
