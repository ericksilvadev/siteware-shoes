import { useGetProducts } from './hooks/useGetProducts';

function App() {
  const test = useGetProducts('products/1').then(console.log);
  console.log(test);

  return <div className="App">SITEWARE SHOES</div>;
}

export default App;
