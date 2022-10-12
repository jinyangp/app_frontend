import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import SearchBar from "./SearchBar";
// import LargeBold from "./texts/LargeBold";

function MainNavigation() {
  return (
    <header className={classes.header}>
      {/* <div></div> */}
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
                <b>Sign Up</b>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;
