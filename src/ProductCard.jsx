const ProductCard = ({ id, baseName, baseDescription }) => {
    
  return (
    <>
      <div className="itemCard">
        <small>ID: {id}</small>
        <h1>{baseName}</h1>
        <p>{baseDescription}</p>
      </div>
    </>
  );
};
export default ProductCard;
