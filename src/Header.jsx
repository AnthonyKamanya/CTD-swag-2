import viteLogo from '/vite.svg';
import cart from './assets/icons/shoppingCart.svg';
const Header = ({cart}) => {
  return (
    <>
      <ul>
        <div className="header">
          <h1>CTD Swag</h1>
          <div style={{ height: 100, width: 100 }}>
            <img src={viteLogo} alt="Code The Dream Logo" />
            <img src={cart} alt="cart" />
          </div>
          <h2>coming soon...</h2>
        </div>
      </ul>
    </>
  );
};

export default Header;
