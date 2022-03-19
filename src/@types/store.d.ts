declare namespace Store {
  interface ISale {
    pay: string;
    salePrice: number;
    take: number;
  }
  export interface IProduct {
    id: number;
    name: string;
    category: string;
    image: string;
    colors: string[];
    sizes: number[];
    rating: number;
    defaultPrice: number;
    price: number;
    inventory: number;
    description: string;
    sale?: ISale;
  }

  export interface ICart {
    quantity: number;
    color: string;
    size: number;
    product: Store.IProduct;
    isSaleActive?: boolean;
  }
}
