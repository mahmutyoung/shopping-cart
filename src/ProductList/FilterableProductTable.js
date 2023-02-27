import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useState } from "react";

const FilterableProductTable = ({ products, handleCartClick }) => {
  const [isShowStocked, setIsStocked] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  return (
    <div className="product-table__container">
      <SearchBar
        onCheckboxChange={() => setIsStocked(!isShowStocked)}
        onSearch={(value) => setSearchItem(value)}
      />
      <ProductTable
        products={products}
        isOnlyStocked={isShowStocked}
        searchItem={searchItem}
        handleCart={handleCartClick}
      />
    </div>
  );
};
export default FilterableProductTable;
