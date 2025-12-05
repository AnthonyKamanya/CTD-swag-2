import { Children } from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ inventory, children }) => {
  return (
    <>
      <ul>
        {children}
        {inventory.map((item) => {
          return (
            <ProductCard
              key={item.id}
              id={item.id}
              baseName={item.baseName}
              baseDescription={item.baseDescription}
            />
          );
        })}
      </ul>
    </>
  );
};

export default ProductList;
