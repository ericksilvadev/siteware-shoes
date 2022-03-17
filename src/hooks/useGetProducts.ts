import { api } from '../services/api';

// Custom hook to get products

export const useGetProducts = async (endpoint: string) => {
  try {
    const response = await api.get(endpoint);

    const products: Store.IProduct[] = response.data || [];

    if (!products.length) {
      return { response };
    }

    const shoes = products.filter((item) => item.category === 'shoes');
    const socks = products.filter((item) => item.category === 'socks');

    return { products, socks, shoes };
  } catch (err) {
    console.log(err);
    return { products: [], socks: [], shoes: [] };
  }
};
