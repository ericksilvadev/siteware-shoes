declare namespace Store {
  interface ISale {
    pay: string;
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
    promotionPrice: number;
    description: string;
    sale?: ISale;
  }
}
