import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import classes from "./SearchBar.module.css";

function SearchBar({ placeholder }) {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const onTextInputChange = (value) => {
    setSearchText(value.target.value);
  };

  const onSearchHandler = (e) => {
    if (e.key == "Enter") {
      navigate(`/products/${searchText}`, {
        state: {
          searchQuery: searchText,
        },
      });
    }
  };

  const onClickHandler = () => {
    navigate(`/products/${searchText}`, {
      state: {
        searchQuery: searchText,
      },
    });
  };

  return (
    <section>
      <div className={classes.searchbarContainer}>
        <div className={classes.textInputContainer}>
          <input
            className={classes.textInput}
            onChange={(val) => {
              onTextInputChange(val);
            }}
            onKeyPress={(e) => {
              onSearchHandler(e);
            }}
            type="text"
            value={searchText}
            placeholder={placeholder}
          />
          <div className={classes.searchIconContainer}>
            <button
              onClick={() => {
                onClickHandler();
                window.location.reload(false);
              }}
            >
              <SearchIcon type="submit" style={{ color: "white" }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
