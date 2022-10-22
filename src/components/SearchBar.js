import SearchIcon from "@mui/icons-material/Search";
import classes from "./SearchBar.module.css";
import React, { useState } from "react";

function SearchBar({ placeholder, data }) {
  return (
    <section>
      <div className={classes.searchbarContainer}>
        <div className={classes.textInputContainer}>
          <input
            className={classes.textInput}
            type="text"
            placeholder={placeholder}
          />
          <div className={classes.searchIconContainer}>
            <SearchIcon
              style={{ color: "white" }}
              onClick={() => {
                console.log("Searching");
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
