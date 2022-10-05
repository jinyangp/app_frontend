import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      {/* <div className={classes.logo}>PriceFix</div> */}
      <nav>
        <ul>
          <li>
            <Link to="/">PriceFix</Link>
          </li>
          <div></div>
          <li>
            <Link to="/login">Login</Link>
          </li>

          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
