import { useEffect, useState } from 'react';
import './App.css';
import inventoryData from './assets/inventory.json';
import ProductList from './ProductList';
import Header from './Header';
import Cart from './Cart';

function App() {
  const [inventory, setInventory] = useState(inventoryData.inventory);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const year = new Date();
  const handleCloseCart = () => {
    //prevents re-render if unchanged
    if (isCartOpen) {
      setIsCartOpen(false);
    }
  };

  const handleOpenCart = () => {
    //prevents re-render if unchanged
    if (isCartOpen) {
      setIsCartOpen(true);
    }
  };

  const handleAddItemToCart = (id) => {
    const foundInventoryItem = inventory.find((item) => item.id === id);
    if (!foundInventoryItem) {
      console.error('cart error: item not found');
      return;
    }
    const itemToUpdate = cart.find((item) => item.id === id);
    let updatedCartItem;
    if (itemToUpdate) {
      updatedCartItem = {
        ...itemToUpdate,
        itemCount: itemToUpdate.itemCount + 1,
      };
    } else {
      updatedCartItem = { ...foundInventoryItem, itemCount: 1 };
    }
    setCart([...cart.filter((item) => item.id !== id), updatedCartItem]);
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
      <Header cart={cart} handleOpenCart={handleOpenCart} />
      {/*`isCartOpen has to be true for the cart to be rendered*/}
      <div>
        {' '}
        {isCartOpen && <Cart cart={cart} handleCloseCart={handleCloseCart} />}
      </div>
      <main>
        <ProductList
          inventory={inventory}
          handleAddItemToCart={handleAddItemToCart}
        ></ProductList>
      </main>
      <footer>
        <p>
          Made with ✌🏿 | &copy; {year.getFullYear()}{' '}
          <a href="https://codethedream.org/">CTD </a>
        </p>
      </footer>
    </>
  );
}

export default App;
