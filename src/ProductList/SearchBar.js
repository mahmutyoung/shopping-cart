const SearchBar = ({ onCheckboxChange, onSearch }) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
      ></input>
      <label>
        <input type="checkbox" onChange={onCheckboxChange}></input>
        Show only stocked goods
      </label>
    </form>
  );
};
export default SearchBar;
