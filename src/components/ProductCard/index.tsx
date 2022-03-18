import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { updateCart } from '../../helpers/updateCart';
import { Container } from './styles';
import cartIcon from '/src/assets/icons/icon-cart.svg';

interface IProductCard {
  product: Store.IProduct;
}

export const ProductCard: React.FC<IProductCard> = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const { cart, setCart } = useContext(StoreContext);

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  useEffect(() => {
    const cartItem = cart.find((item) => item.product.id === product.id);
    if (cartItem) setQuantity(cartItem.quantity);
  }, [cart]);

  const handleClick = () => {
    const updatedCart = updateCart({ product, quantity: quantity + 1 }, cart);

    setCart(updatedCart);
  };

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
        <button type="button" className="green" onClick={handleClick}>
          <img className="icon" src={cartIcon} alt="Comprar" />
          Comprar
        </button>
      </Container>
    </Link>
  );
};
