import { BsSearch } from "react-icons/bs";
import classes from "./SearchBar.module.css";

function SearchBar({ placeholder, data }) {
  return (
    <section>
      <h1>Search Bar</h1>
      <div className="search">
        <div className="searchInputs">
          <input type="text" placeholder={placeholder} />
          <div className="searchIcon">
            <BsSearch />
          </div>
        </div>
        <div className="dataResult"></div>
      </div>
    </section>
  );
}

export default SearchBar;
