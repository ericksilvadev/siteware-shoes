import { Container } from './styles';

interface ISaleLable {
  product: Store.IProduct;
}

export const SaleLabel: React.FC<ISaleLable> = ({ product }) => {
  return (
    <Container
      className={product.category === 'socks' ? 'sale-label purple' : 'sale-label'}
    >{`Leve ${product.sale?.take} Pague ${product.sale?.pay}`}</Container>
  );
};
