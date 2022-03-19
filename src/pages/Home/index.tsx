import { useParams } from 'react-router-dom';

import { Banner } from '../../components/Banner';
import { ProductsList } from '../../components/ProductsList';

import { Container } from './styles';

interface IPageTitles {
  [key: string]: string;
}

export const Home = () => {
  const pageTitle: IPageTitles = {
    shoes: 'Calçados',
    socks: 'Meias',
    home: 'Produtos',
  };

  const { category } = useParams();

  const location = category || 'home';

  return (
    <Container>
      <Banner />
      <h1>{pageTitle[location]}</h1>
      <ProductsList />
    </Container>
  );
};
