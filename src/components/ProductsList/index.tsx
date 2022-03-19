import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetProducts } from '../../hooks/useGetProducts';
import { ProductCard } from '../../components/ProductCard';
import { Loading } from '../Loading';

import { Container } from './styles';

export const ProductsList = () => {
  const [products, setProducts] = useState<Store.IProduct[]>([]);

  const { category } = useParams();

  const fetchProducts = useCallback(async () => {
    const { products: pd } = await useGetProducts('products', category);

    if (pd) {
      setProducts(pd);
    }
  }, [category]);

  useEffect(() => {
    fetchProducts();
  }, [category]);

  if (!products.length) {
    return (
      <Container style={{ justifyContent: 'center' }}>
        <Loading />
      </Container>
    );
  }

  return (
    <Container>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </Container>
  );
};
