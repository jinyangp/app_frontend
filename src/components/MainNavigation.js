import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useNavigate } from "react-router-dom";

import SearchBar from "./SearchBar";
import NormalRegular from "./texts/NormalRegular";
import LargeBold from "./texts/LargeBold";
import Utils from "../helper/Utils";

function MainNavigation() {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    const reqData = {
      token: token,
      queryParams: {
        userId: userId,
      },
    };

    Utils.getProtectedApi("/users/verifyJWT", reqData)
      .then((res) => {
        if (res.message && res.message == "Unauthenticated") {
          setIsAuth(false);
        } else {
          setIsAuth(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isAuth) {
    return (
      <header className={classes.header}>
        <nav>
          <div className={classes.navContainer}>
            <div className={classes.titleContainer}>
              <Link to="/">
                <LargeBold text="PriceFix" />
              </Link>
            </div>

            <div className={classes.authedSearchBar}>
              <SearchBar placeholder="Search" />
            </div>

            <ul className={classes.authedUlContainer}>
              <div
                className={classes.authedLinkContainer}
                onClick={() => {
                  navigate("/wishlist");
                }}
              >
                <NormalRegular text="Wish List" />
              </div>

              <div className={classes.authedLinkContainer}>
                <NormalRegular text="Notifications" />
              </div>

              <li className={`btn--black ${classes.userContainer}`}>
                <div
                  onClick={() => {
                    navigate("/profile");
                  }}
                >
                  <b>{JSON.parse(localStorage.getItem("userName"))}</b>
                </div>
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
                <LargeBold text="PriceFix" />
              </Link>
            </div>

            <div className={classes.notAuthedSearchBar}>
              <SearchBar placeholder="Search" />
            </div>

            <ul className={classes.notAuthedUlContainer}>
              <li className={`btn--black ${classes.notAuthedBtn}`}>
                <div
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  <b>Log in</b>
                </div>
              </li>

              <li className={`btn--white ${classes.notAuthedBtn}`}>
                <div
                  onClick={() => {
                    navigate("/sign-up");
                  }}
                >
                  <b>Sign Up</b>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default MainNavigation;
