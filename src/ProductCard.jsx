import { useState } from 'react';
import placeholder from './assets/icons/placeholder.png';
import ProductCardVariants from './ProductCardVariants';
const ProductCard = ({ product, handleAddItemToCart }) => {
  const [areVariantsShown, setAreVariantsShown] = useState(false);
  return (
    <>
      <li className="productCard">
        <div className="productPreview">
          <small>ID: {product.id}</small>
          <div>
            <img className="picture" src={placeholder} alt=" " />
          </div>
          <div className="productCopy">
            <h1>{product.baseName}</h1>
            <p>{product.baseDescription}</p>
          </div>
          <div className="productButtons">
            {product.variants.length > 1 ? (
              <button onClick={() => setAreVariantsShown(true)}>
                Show Options
              </button>
            ) : (
              <button
                onClick={() => handleAddItemToCart(product.variants[0].id)}
              >
                Add to cart
              </button>
            )}
          </div>
          {areVariantsShown && (
            <ProductCardVariants
              handleAddItemToCart={handleAddItemToCart}
              variants={product.variants}
              closeVariants={() => setAreVariantsShown(false)}
            />
          )}
        </div>
      </li>
    </>
  );
};
export default ProductCard;
