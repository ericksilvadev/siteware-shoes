import { MouseEventHandler, useCallback, useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CircularProgress, Rating } from '@mui/material';

import { StoreContext } from '../../context/StoreContext';
import { updateCart } from '../../helpers/updateCart';
import { useGetProducts } from '../../hooks/useGetProducts';
import { priceFormatter } from '../../helpers/priceFormatter';
import cartIcon from '/src/assets/icons/icon-cart.svg';

import { Container, Content } from './styles';

export const ProductDetails = () => {
  const [product, setProduct] = useState<Store.IProduct>();
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState('Cinza');
  const [selectedSize, setSelectedSize] = useState(42);

  const { cart, setCart } = useContext(StoreContext);

  const { id } = useParams();

  const fetchProduct = useCallback(async () => {
    const { productDetails } = await useGetProducts(`products/${id}`);

    if (productDetails) {
      setProduct(productDetails);
    }
  }, []);

  useEffect(() => {
    fetchProduct();
  }, []);

  useEffect(() => {
    if (product) {
      const cartItem = cart.find((item) => item.product.id === product.id);

      if (cartItem) setQuantity(cartItem.quantity);
    }
  }, [cart, product]);

  const handleClick = () => {
    if (product) {
      const updatedCart = updateCart(
        { product, quantity: quantity + 1, color: selectedColor, size: selectedSize },
        cart
      );
      setCart(updatedCart);
    }
  };

  if (!product)
    return (
      <Container>
        <CircularProgress color="inherit" />
      </Container>
    );

  return (
    <Container>
      <Content>
        <section className="heading">
          <h1>{product.name}</h1>
          <div className="images">
            <div className="miniatures">
              <img src={product.image} alt={product.name} />
              <img src={product.image} alt={product.name} />
              <img src={product.image} alt={product.name} />
              <img src={product.image} alt={product.name} />
              <img src={product.image} alt={product.name} />
            </div>
            <img src={product.image} alt={product.name} />
          </div>
        </section>
        <article className="details">
          <p>{product.description}</p>

          {product.sale && (
            <div className="sale-container">
              <span
                className={
                  product.category === 'socks' ? 'sale-label purple' : 'sale-label'
                }
              >{`Leve ${product.sale.take} Pague ${product.sale.pay}`}</span>

              <span className={product.category === 'socks' ? 'sale purple' : 'sale'}>
                Compre <strong>{product.sale.take}</strong> pares e pague somente{' '}
                <strong>{product.sale.pay}</strong>
              </span>
            </div>
          )}

          <div className="colors">
            <span className="label">Cor</span>
            <div className="colors-list">
              {product.colors.map((color) => (
                <button
                  onClick={() => setSelectedColor(color)}
                  type="button"
                  className={selectedColor === color ? `${color} selected` : color}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="sizes">
            <span className="label">Tamanho</span>
            <div className="sizes-list">
              {product.sizes.map((size) => (
                <button
                  onClick={() => setSelectedSize(size)}
                  className={selectedSize === size ? 'selected' : ''}
                  type="button"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="rating">
            <span className="label">Avaliações</span>
            <Rating
              className="rating-stars"
              readOnly
              value={product.rating}
              precision={0.2}
            />
          </div>
        </article>

        <aside className="pricing">
          <span className="default-price">{priceFormatter(product.defaultPrice)}</span>
          <span className="price">{priceFormatter(product.promotionPrice)}</span>

          <button type="button" className="green" onClick={handleClick}>
            <Link to="/checkout">
              <img src={cartIcon} alt="Comprar" />
              Comprar
            </Link>
          </button>
        </aside>
      </Content>
    </Container>
  );
};
