import { api } from '../services/api';

export const useGetProducts = async (endpoint: string, filter?: string) => {
  try {
    const response = await api.get(endpoint);

    const products: Store.IProduct[] = response.data || [];

    // Check if products is an array
    if (!products.length) {
      return { productDetails: response.data };
    }

    if (filter) {
      const filteredProducts = products.filter((item) => item.category === filter);
      return { products: filteredProducts };
    }

    return { products };
  } catch (err) {
    console.log(err);
    return { products: [] };
  }
};
