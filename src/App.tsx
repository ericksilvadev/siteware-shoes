import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <Outlet />
      <Header />
      <NavBar />
      <GlobalStyle />
    </>
  );
}

export default App;
