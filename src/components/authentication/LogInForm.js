import { useRef, useState } from "react";
import Card from "../Card";
import classes from "./LogInForm.module.css";
import { Link } from "react-router-dom";

function LogInForm(props) {
  const usernameEmailInputRef = useRef();
  const passwordInputRef = useRef();

  //   const [errorMessage, setErrorMessage] = useState("");

  function submitHandler(event) {
    console.log("clicked log in");
    event.preventDefault();

    //   reading what the user entered
    const enteredUsernameEmail = usernameEmailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    console.log(enteredUsernameEmail);
    console.log(enteredPassword);
    //query the DB

    //redirect to main page
  }

  return (
    <div className={classes.formContainer}>
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="username">Username or Email</label>
            <input
              type="text"
              required
              id="username"
              ref={usernameEmailInputRef}
            />
          </div>

          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              required
              id="password"
              ref={passwordInputRef}
            />
          </div>

          <div className={classes.actions}>
            {/* <div className={classes.errortext}>{errorMessage}</div> */}
            <button>Login</button>
          </div>
        </form>
        <div className={classes.centralise}>
          Dont have an account?
          <Link to="/sign-up">Sign Up</Link>
        </div>
      </Card>
    </div>
  );
}

export default LogInForm;
