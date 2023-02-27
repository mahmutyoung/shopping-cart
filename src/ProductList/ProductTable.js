import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import { useEffect, useState } from "react";

const ProductTable = ({ products, isOnlyStocked, searchItem, handleCart }) => {
  const [addedProducts, setAddedProducts] = useState([]);
  let lastCategory = null;
  let rows = [];

  const addToCart = (product) => {
    const newProduct = { number: 1, ...product };
    setAddedProducts((arr) => [newProduct, ...arr]);
    console.log("addedProducts", addedProducts);
  };

  useEffect(() => handleCart(addedProducts), [addedProducts]);

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          key={product.category}
          category={product.category}
        />
      );
    }
    if (
      (!isOnlyStocked || product.stock) &&
      product.name.includes(searchItem)
    ) {
      rows.push(
        <ProductRow
          key={product.name}
          name={product.name}
          price={product.price}
          stock={product.stock}
          onCartClick={() => addToCart(product)}
        />
      );
    }

    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};
export default ProductTable;
