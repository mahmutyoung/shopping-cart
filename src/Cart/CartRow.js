import { useState } from "react";
const CartRow = ({ product, onDelete }) => {
  const [number, setNumber] = useState(product.number);
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>
        {number}
        <button onClick={() => setNumber((x) => x + 1)} className="counter">
          +
        </button>
        <button
          onClick={() => setNumber((x) => (x > 1 ? x - 1 : x))}
          className="counter"
        >
          -
        </button>
      </td>
      <td>${number * product.price[1]}</td>
      <td>
        <button onClick={onDelete} className="counter">
          x
        </button>
      </td>
    </tr>
  );
};
export default CartRow;
