import { Children, useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ inventory, handleAddItemToCart }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const workingProducts = [];

    //forEach goes through every item in inventory.
    // If an item is out of stock, skip it (return).
    inventory.forEach((item) => {
      if (!item.inStock) {
        return;
      }

      //find searches if workingProducts already has a product with the same baseName.
      // baseName is like the model or name of the product, ignoring color/size differences.
      if (
        !workingProducts.find(
          (productItem) => productItem.baseName === item.baseName
        )
      ) {
        // If it’s a new product, we create an object:
        // baseName, price, baseDescription → main info.
        // variants → array containing the first variant (spread { ...item }
        // copies all properties like color, size, SKU).
        // Then we push this into workingProducts.
        workingProducts.push({
          baseName: item.baseName,
          price: item.price,
          baseDescription: item.baseDescription,
          variants: [{ ...item }],
        });

        // If the product already exists, find its index.
        // Push the current item into the variants array of that product.
        // So now one product has multiple options grouped inside.
      } else {
        const index = workingProducts.findIndex(
          (productItem) => productItem.baseName === item.baseName
        );
        workingProducts[index].variants.push({ ...item });
      }
    });
    setProducts([...workingProducts]);
  }, [inventory]);
  return (
    <>
      <div className="productListContainer">
        <div className="container">
          {products.map((product) => {
            return (
              <ProductCard
                key={product.baseName}
                id={product.baseName}
                product={product}
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
