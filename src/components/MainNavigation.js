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
          <ul>
            <Link to="/">
              <h2>PriceFix </h2>
            </Link>

            <SearchBar />

            <li className="btn--black">
              <Link to="/login">
                <b>Login</b>
              </Link>
            </li>

            <li className="btn--white">
              <Link to="/sign-up">
                <b>Sign Up</b>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  } else {
    return (
      <header className={classes.header}>
        <nav>
          <ul>
            <Link to="/">
              <h2>PriceFix </h2>
            </Link>

            <SearchBar />

            <li className="btn--black">
              <Link to="/wishlist">
                <b>Wish list</b>
              </Link>
            </li>

            <li className="btn--black">
              <b>{user.userName}</b>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default MainNavigation;
