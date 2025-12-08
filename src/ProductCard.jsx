import placeholder from './assets/icons/placeholder.png';
const ProductCard = ({
  id,
  baseName,
  baseDescription,
  handleAddItemToCart,
}) => {
  return (
    <>
      <div className="itemCard">
        <small>ID: {id}</small>
        <div>
          <img className='picture'src={placeholder} alt="" />
        </div>
        <h1>{baseName}</h1>
        <p>{baseDescription}</p>
        <button onClick={() => handleAddItemToCart(id)}>Add to cart</button>
      </div>
    </>
  );
};
export default ProductCard;
