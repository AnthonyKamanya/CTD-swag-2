import viteLogo from '/vite.svg';
import shoppingCart from './assets/icons/shoppingCart.svg';
const Header = ({ cart, handleOpenCart }) => {
  const getItemCount = () => {
    return cart.reduce((acc, item) => acc + item.itemCount, 0);
  };
  return (
    <header className="header">
      <div className="siteBranding">
        <img src={viteLogo} alt="Code The Dream Logo" />
        <h1>CTD Swag</h1>
      </div>
      <div className="shoppingCart">
        <button type="button" onClick={handleOpenCart}>
          <img src={shoppingCart} alt="" />
          <p className="cartCount">{getItemCount()}</p>
        </button>
      </div>
    </header>
  );
};

export default Header;
