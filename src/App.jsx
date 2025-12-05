import { useEffect, useState } from 'react';
import './App.css';
import inventoryData from './assets/inventory.json';
import ProductList from './ProductList';
import Header from './Header';
import ProductCard from './ProductCard';

function App() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    setInventory([...inventoryData.inventory]);
  }, []);

  function promoteItem() {
    return (
      <ProductCard
        baseName="Limited Edition Tee!"
        baseDescription="Special limited edition neon green shirt with a metallic Code the Dream Logo shinier than the latest front-end framework! Signed by the legendary Frank!"
      />
    );
  }

  return (
    <>
      <Header />
      <ProductList inventory={inventory}>{promoteItem()}</ProductList>
    </>
  );
}

export default App;
