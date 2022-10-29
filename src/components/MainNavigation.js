import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import SearchBar from "./SearchBar";
import { useContext } from "react";
import { UserContext } from "./UserContext";

function MainNavigation() {
  const { user } = useContext(UserContext);

  if (user === null) {
    return (
      <header className={classes.header}>
        <nav>
          <div className={classes.navContainer}>
            <div className={classes.titleContainer}>
              <Link to="/">
                <h1>PriceFix</h1>
              </Link>
            </div>

            <div className={classes.searchBarContainer}>
              <SearchBar placeholder="Search" />
            </div>

            <ul className={classes.ulcontainer}>
              <li className="btn--black">
                <Link to="/login">
                  <b>Login</b>
                </Link>
              </li>

              <li className="btn--white">
                <Link to="/sign-up">
                  <b>SignUp</b>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  } else {
    return (
      <header className={classes.header}>
        <nav>
          <div className={classes.navContainer}>
            <div className={classes.titleContainer}>
              <Link to="/">
                <h1>PriceFix</h1>
              </Link>
            </div>

            <div className={classes.searchBarContainer}>
              <SearchBar placeholder="Search" />
            </div>

            <ul className={classes.ulcontainer}>
              <li className="btn--black">
                <Link to="/wishlist">
                  <b>Wishlist</b>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default MainNavigation;
