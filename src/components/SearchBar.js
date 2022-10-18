import SearchIcon from "@mui/icons-material/Search";
import classes from "./SearchBar.module.css";
import React, { useState } from "react";

function SearchBar({ placeholder, data }) {
  return (
    <section>
      <div className={classes.searchbarContainer}>
        <div className={classes.filterContainer}>{/* <p>All</p> */}</div>
        <div className={classes.textInputContainer}>
          <input
            className={classes.textInput}
            type="text"
            placeholder={placeholder}
          />
          <div className={classes.searchIconContainer}>
            <button>
              <SearchIcon style={{ color: "white" }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
