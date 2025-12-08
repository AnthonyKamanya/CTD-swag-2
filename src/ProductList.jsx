import { Children } from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ inventory, handleAddItemToCart }) => {
  return (
    <>
      <div className="productListContainer">
        <div className='container'>
          {inventory.map((item) => {
            return (
              <ProductCard
                key={item.id}
                id={item.id}
                baseName={item.baseName}
                baseDescription={item.baseDescription}
                handleAddItemToCart={handleAddItemToCart}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
