import { Lable } from './styles';

interface ISaleLable {
  product: Store.IProduct;
}

export const SaleLable: React.FC<ISaleLable> = ({ product }) => {
  return (
    <Lable
      className={product.category === 'socks' ? 'sale-label purple' : 'sale-label'}
    >{`Leve ${product.sale?.take} Pague ${product.sale?.pay}`}</Lable>
  );
};
