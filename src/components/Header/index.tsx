import searchIcon from '/src/assets/icons/icon-search.svg';
import cartIcon from '/src/assets/icons/icon-cart.svg';
import personIcon from '/src/assets/icons/icon-person.svg';

import { Container } from './styles';

export const Header = () => {
  return (
    <Container>
      <div className="heading-frame" />
      <div className="search-input">
        <input type="text" placeholder="O quê você procura" />
        <img className="icon" src={searchIcon} alt="Buscar" />
      </div>

      <div className="buttons">
        <div className="login">
          <img className="icon" src={personIcon} alt="Carrinho" />

          <button type="button">Login</button>
          <button type="button">Cadastre-se</button>
        </div>
        <div className="cart">
          <img className="icon" src={cartIcon} alt="Carrinho" />
          <button type="button" className="cart">
            Meu carrinho
          </button>
          <span className="items-quantity">2</span>
          <span className="empty-cart">Vazio</span>
        </div>
      </div>
    </Container>
  );
};
