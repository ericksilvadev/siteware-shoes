import { Link } from 'react-router-dom';
import { Container } from './styles';
import cartIcon from '/src/assets/icons/icon-cart.svg';

interface IProductCard {
  product: Store.IProduct;
}

export const ProductCard: React.FC<IProductCard> = ({ product }) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return (
    <Link to={`product/${product.id}`} style={{ color: '#333' }}>
      <Container>
        {product.sale && (
          <span
            className={product.category === 'socks' ? 'sale purple' : 'sale'}
          >{`Leve ${product.sale.take} Pague ${product.sale.pay}`}</span>
        )}
        <img src={product.image} alt={product.name} />
        <h1>{product.name}</h1>
        <div className="pricing">
          <span className="default-price">{formatter.format(product.defaultPrice)}</span>
          <span className="price">{formatter.format(product.promotionPrice)}</span>
        </div>
        <button type="button" className="green">
          <img className="icon" src={cartIcon} alt="Comprar" />
          Comprar
        </button>
      </Container>
    </Link>
  );
};
