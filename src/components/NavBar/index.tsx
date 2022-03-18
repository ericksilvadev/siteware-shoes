import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import logo from '/src/assets/icons/siteware-shoes.svg';
import homeIcon from '/src/assets/icons/icon-home.svg';
import shoeIcon from '/src/assets/icons/icon-shoe.svg';
import sockIcon from '/src/assets/icons/icon-sock.svg';
import cogIcon from '/src/assets/icons/icon-cog.svg';
import { StoreContext } from '../../context/StoreContext';

import { Container } from './styles';

export const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const { setFilter } = useContext(StoreContext);

  const { pathname } = useLocation();

  const { category } = useParams();

  useEffect(() => {
    setFilter(category);
  }, []);

  const handleCLick = (filter?: string) => {
    setFilter(filter);
  };

  return (
    <Container onMouseOver={() => setShowNav(true)} onMouseOut={() => setShowNav(false)}>
      <div className="nav-main">
        <img src={logo} alt="Siteware Shoes" className="icon logo" />
        <h1>Siteware Shoes</h1>

        <nav>
          <Link
            to="/"
            className={pathname === '/' ? 'selected icon-container' : ' icon-container'}
          >
            <img src={homeIcon} alt="Produtos" className="icon" />
          </Link>

          <Link
            to="category/shoes"
            className={
              pathname.includes('/shoes') ? 'selected icon-container' : ' icon-container'
            }
          >
            <img src={shoeIcon} alt="Calçados" className="icon" />
          </Link>

          <Link
            to="category/socks"
            className={
              pathname.includes('/socks') ? 'selected icon-container' : ' icon-container'
            }
          >
            <img src={sockIcon} alt="Meias" className="icon" />
          </Link>

          <ul className={showNav ? 'show popup-nav' : 'popup-nav'}>
            <li>
              <Link
                to="/"
                className={pathname === '/' ? 'selected' : ''}
                onClick={() => handleCLick()}
              >
                Produtos
              </Link>
            </li>

            <li>
              <Link
                to="/category/shoes"
                className={pathname.includes('/shoes') ? 'selected' : ''}
                onClick={() => handleCLick('shoes')}
              >
                Calçados
              </Link>
            </li>

            <li>
              <Link
                to="/category/socks"
                className={pathname.includes('/socks') ? 'selected' : ''}
                onClick={() => handleCLick('socks')}
              >
                Meias
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <button type="button">
        <img src={cogIcon} alt="Configurações" className="icon" />
      </button>
    </Container>
  );
};
