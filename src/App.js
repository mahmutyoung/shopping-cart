import FilterableProductTable from "../ProductList/FilterableProductTable";
import Cart from "../Cart/Cart";
import { useState } from "react";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stock: 100, name: "Apple" },
  { category: "Fruits", price: "$1", stock: 200, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stock: 0, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stock: 50, name: "Spinach" },
  { category: "Vegetables", price: "$4", stock: 0, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stock: 50, name: "Peas" }
];

const App = () => {
  const [cartArr, setCart] = useState([]);

  console.log("cartArr", cartArr);
  return (
    <div className="main__container">
      <FilterableProductTable
        products={PRODUCTS}
        handleCartClick={(x) => setCart(x)}
      />
      <Cart cart={cartArr} />
    </div>
  );
};
export default App;
