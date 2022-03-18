import { useCallback, useContext, useEffect, useState } from 'react';
import { Banner } from '../../components/Banner';
import { StoreContext } from '../../context/StoreContext';
import { useGetProducts } from '../../hooks/useGetProducts';
import { Container } from './styles';

export const Home = () => {
  const [products, setProducts] = useState<Store.IProduct[]>([]);

  const { filter } = useContext(StoreContext);

  const fetchProducts = useCallback(async () => {
    const { products: pd } = await useGetProducts('products', filter);

    if (pd) {
      console.log(pd);

      setProducts(pd);
    }
  }, [filter]);

  useEffect(() => {
    fetchProducts();
  }, [filter]);

  return (
    <Container>
      <Banner />
    </Container>
  );
};
