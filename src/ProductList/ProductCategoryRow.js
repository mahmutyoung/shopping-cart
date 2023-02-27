const ProductCategoryRow = ({ category }) => {
  return (
    <tr
      style={{
        fontWeight: "bold",
        marginBottom: "16px"
      }}
    >
      <td>{category}</td>
    </tr>
  );
};
export default ProductCategoryRow;
