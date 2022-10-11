import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import SearchBar from "./SearchBar";
// import LargeBold from "./texts/LargeBold";

function MainNavigation() {
  return (
    <header className={classes.header}>
      {/* <div></div> */}
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

          {/* <li className="btn--white">
            <Link to="/wishlist">
              <b>Wish list</b>
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
