import { useRef } from "react";
import Card from "../Card";
import classes from "./NewSignUpForm.module.css";
import { Link } from "react-router-dom";
import { Spin } from "antd";
import "antd/es/spin/style/css";

function NewSignUpForm(props) {
  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  // const [errorMessage, setErrorMessage] = useState("");

  function submitHandler(event) {
    // console.log("clicked sign up");
    event.preventDefault();

    //   reading what the user entered
    const enteredUsername = usernameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmPassword = confirmPasswordInputRef.current.value;

    // Check whether the password matches
    // if they dont, show an error

    // if (enteredPassword !== enteredConfirmPassword) {
    //   // console.log("password mismatch");
    //   setErrorMessage("Passwords do not match");
    //   return;
    // }

    // if (enteredPassword === enteredConfirmPassword) {
    //   setErrorMessage("");
    // }

    //   creating the user object that the user entered
    const userData = {
      userName: enteredUsername,
      userEmail: enteredEmail,
      userPassword: enteredPassword,
      userConfirmPassword: enteredConfirmPassword,
    };

    props.onAddUser(userData);
  }

  return (
    <div className={classes.formContainer}>
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="username">Username</label>
            <input type="text" required id="username" ref={usernameInputRef} />
          </div>

          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="text" required id="email" ref={emailInputRef} />
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

          <div className={classes.control}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              required
              id="confirmPassword"
              ref={confirmPasswordInputRef}
            />
          </div>

          <div className={classes.actions}>
            {props.isLoading ? (
              <div className={classes.spinCentred}>
                <Spin size="default" spinning={props.isLoading} />
              </div>
            ) : (
              <button>Sign Up</button>
            )}
            {props.errorMsg ? (
              <div className={classes.errortext}>{props.errorMsg}</div>
            ) : (
              <div></div>
            )}
          </div>
        </form>
        <div className={classes.centralise}>
          Already have an account?
          <Link to="/login">Login</Link>
        </div>
      </Card>
    </div>
  );
}

export default NewSignUpForm;
