import CartRow from "./CartRow";

const Cart = ({ cart }) => {
  const cartItems = cart.map((product) => (
    <CartRow key={product.name} product={product} />
  ));
  return (
    <div className="cart__container">
      <h3>My Shopping Cart</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Number </th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>{cartItems}</tbody>
      </table>
    </div>
  );
};
export default Cart;
