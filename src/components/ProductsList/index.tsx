import { useCallback, useContext, useEffect, useState } from 'react';

import { StoreContext } from '../../context/StoreContext';
import { useGetProducts } from '../../hooks/useGetProducts';
import { ProductCard } from '../../components/ProductCard';

import { Container } from './styles';
import { useParams } from 'react-router-dom';

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

  return (
    <Container>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </Container>
  );
};
