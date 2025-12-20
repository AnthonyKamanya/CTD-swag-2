import { useEffect, useState } from 'react';
import './App.css';
import inventoryData from './assets/inventory.json';
import ProductList from './ProductList';
import Header from './Header';

function App() {
  const [inventory, setInventory] = useState(inventoryData.inventory);
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
    console.log(cart.length);
  };

  const removeItemFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart([...updatedCart]);
  };

  // Every time the cart changes:
  // React prints each item
  // Shows the base name
  // Shows the unique cart sticker
  // Logs “end of cart”
  // This is like asking:
  // “Helper, tell me what’s currently inside the basket.”

  useEffect(() => {
    cart.forEach((item) => {
      console.log(item.baseName, item.cartItemId);
    });
    if (cart.length > 0) {
      console.log('--end of cart--');
    }
  });

  // function promoteItem() {
  //   return (
  //     <ProductCard
  //       baseName="Limited Edition Tee!"
  //       baseDescription="Special limited edition neon green shirt with a metallic Code the Dream Logo shinier than the latest front-end framework! Signed by the legendary Frank!"
  //     />
  //   );
  // }

  // Passing state down to productCard
  // App = store manager
  // ProductList = aisle
  // ProductCard = shelf
  // Button = user picking up the toy
  // The “add to cart” instruction travels down the chain so the button can use it.

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
