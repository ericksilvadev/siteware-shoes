import { Link } from 'react-router-dom';

import cartIcon from '/src/assets/icons/icon-cart.svg';

import { Container } from './styles';
import { priceFormatter } from '../../helpers/priceFormatter';

interface IProductCard {
  product: Store.IProduct;
}

export const ProductCard: React.FC<IProductCard> = ({ product }) => {
  return (
    <Link to={`product/${product.id}`} style={{ color: '#333' }}>
      <Container>
        {product.sale && (
          <span
            className={product.category === 'socks' ? 'sale-label purple' : 'sale-label'}
          >{`Leve ${product.sale.take} Pague ${product.sale.pay}`}</span>
        )}
        <img src={product.image} alt={product.name} />
        <h1>{product.name}</h1>
        <div className="pricing">
          <span className="default-price">{priceFormatter(product.defaultPrice)}</span>
          <span className="price">{priceFormatter(product.promotionPrice)}</span>
        </div>
        <button type="button" className="green">
          <img className="icon" src={cartIcon} alt="Comprar" />
          Comprar
        </button>
      </Container>
    </Link>
  );
};
