import { useCallback, useContext, useEffect, useState } from 'react';

import { StoreContext } from '../../context/StoreContext';
import { useGetProducts } from '../../hooks/useGetProducts';
import { ProductCard } from '../../components/ProductCard';

import { Container } from './styles';

export const ProductsList = () => {
  const [products, setProducts] = useState<Store.IProduct[]>([]);

  const { filter } = useContext(StoreContext);

  const fetchProducts = useCallback(async () => {
    const { products: pd } = await useGetProducts('products', filter);

    if (pd) {
      setProducts(pd);
    }
  }, [filter]);

  useEffect(() => {
    fetchProducts();
  }, [filter]);

  return (
    <Container>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </Container>
  );
};
