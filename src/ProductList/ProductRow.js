const ProductRow = ({ name, price, stock, onCartClick }) => {
  return (
    <tr style={{ color: !stock && "#888" }}>
      <td>{name}</td>
      <td>{price}</td>
      <td>{stock}</td>
      <td>
        {stock ? (
          <button onClick={onCartClick}>Add to Cart</button>
        ) : (
          <button disabled>Add to Cart</button>
        )}
      </td>
    </tr>
  );
};
export default ProductRow;
