import { useEffect, useState } from 'react';
import './App.css';
import inventoryData from './assets/inventory.json';
import ProductList from './ProductList';
import Header from './Header';
import ProductCard from './ProductCard';

function App() {
  const [inventory, setInventory] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddItemToCart = (id) => {
    const foundInventoryItem = inventory.find((item) => item.id === id);
    if (!foundInventoryItem) {
      console.error('cart error: item not found');
      return;
    }
    const cartItem = { ...foundInventoryItem, cartItemId: Date.now() };
    console.log(cartItem);
    setCart([...cart, cartItem]);
  };

  const removeItemFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart([...updatedCart]);
  };

  useEffect(() => {
    cart.forEach((item) => {
      console.log(item.baseName, item.cartItemId);
    });
    if (cart.length > 0) {
      console.log('--end of cart--');
    }
  });

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
      <Header cart={cart} />
      <ProductList
        inventory={inventory}
        handleAddItemToCart={handleAddItemToCart}
      />
    </>
  );
}

export default App;
