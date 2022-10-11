import SearchIcon from "@mui/icons-material/Search";
import classes from "./SearchBar.module.css";

function SearchBar({ placeholder, data }) {
  return (
    <section>
      <div className="search">
        <div className="searchInputs">
          <input type="text" placeholder={placeholder} />
          <div className="searchIcon">
            <SearchIcon />
          </div>
        </div>
        <div className="dataResult"></div>
      </div>
    </section>
  );
}

export default SearchBar;
