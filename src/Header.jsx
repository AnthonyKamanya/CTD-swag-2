import viteLogo from '/vite.svg';
const Header = () => {
  return (
    <>
      <ul>
        <div className="coming-soon">
          <h1>CTD Swag</h1>
          <div style={{ height: 100, width: 100 }}>
            <img src={viteLogo} alt="Code The Dream Logo" />
          </div>
          <h2>coming soon...</h2>
        </div>
      </ul>
    </>
  );
};

export default Header;
