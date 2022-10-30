import { useRef, useState } from "react";
import Card from "../Card";
import classes from "./NewSignUpForm.module.css";
import { Link } from "react-router-dom";
import { Spin } from "antd";
import "antd/es/spin/style/css";
import VisibilityIcon from "@mui/icons-material/Visibility";

function NewSignUpForm(props) {
  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  function togglePassword1(event) {
    setPasswordShown(!passwordShown);
  }

  function togglePassword2(event) {
    setConfirmPasswordShown(!confirmPasswordShown);
  }

  function submitHandler(event) {
    event.preventDefault();

    //   reading what the user entered
    const enteredUsername = usernameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmPassword = confirmPasswordInputRef.current.value;

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
            <div className={classes.passwordContainer}>
              <input
                type={passwordShown ? "text" : "password"}
                required
                id="password"
                ref={passwordInputRef}
              />
              <button
                className={classes.hidePasswordContainer}
                onClick={togglePassword1}
                type="button"
              >
                <VisibilityIcon />
              </button>
            </div>
          </div>

          <div className={classes.control}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className={classes.passwordContainer}>
              <input
                type={confirmPasswordShown ? "text" : "password"}
                required
                id="confirmPassword"
                ref={confirmPasswordInputRef}
              />
              <button
                className={classes.hidePasswordContainer}
                onClick={togglePassword2}
                type="button"
              >
                <VisibilityIcon />
              </button>
            </div>
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
