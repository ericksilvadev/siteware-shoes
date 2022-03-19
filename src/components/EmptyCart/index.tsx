import cartIcon from '/src/assets/icons/icon-cart.svg';

import { Container } from './styles';
import { Link } from 'react-router-dom';

export const EmptyCart = () => {
  return (
    <Container>
      <h2>Seu carrinho está vazio</h2>
      <p>Aproveite nossas promoções</p>
      <Link to="/">
        <button type="button" className="green">
          <img src={cartIcon} alt="Comprar" />
          Comece a comprar agora
        </button>
      </Link>
    </Container>
  );
};
