import { api } from '../services/api';

// Custom hook to get products

export const useGetProducts = async (endpoint: string, filter?: string) => {
  try {
    const response = await api.get(endpoint);

    const products: Store.IProduct[] = response.data || [];

    if (!products.length) {
      return { productDetail: response.data };
    }

    if (filter) {
      const filteredProducts = products.filter((item) => item.category === filter);
      return { products: filteredProducts };
    }

    return { products };
  } catch (err) {
    console.log(err);
    return { products: [], socks: [], shoes: [] };
  }
};
