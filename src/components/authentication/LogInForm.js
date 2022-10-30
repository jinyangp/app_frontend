import { useRef, useState } from "react";
import Card from "../Card";
import classes from "./LogInForm.module.css";
import { Link } from "react-router-dom";
import { Spin } from "antd";
import "antd/es/spin/style/css";
import VisibilityIcon from "@mui/icons-material/Visibility";

function LogInForm(props) {
  const usernameEmailInputRef = useRef();
  const passwordInputRef = useRef();
  const [passwordShown, setPasswordShown] = useState(false);

  function togglePassword(event) {
    setPasswordShown(!passwordShown);
  }

  function submitHandler(event) {
    console.log("clicked log in");
    event.preventDefault();

    //   reading what the user entered
    const userNameOrEmail = usernameEmailInputRef.current.value;
    const userPassword = passwordInputRef.current.value;

    //query the DB
    const logInData = {
      userNameOrEmail: userNameOrEmail,
      userPassword: userPassword,
    };

    props.onLogIn(logInData);
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
            <div className={classes.passwordContainer}>
              <input
                type={passwordShown ? "text" : "password"}
                required
                id="password"
                ref={passwordInputRef}
              />
              <button
                className={classes.hidePasswordContainer}
                onClick={togglePassword}
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
              <button>Login</button>
            )}
            {props.errorMsg ? (
              <div className={classes.errortext}>{props.errorMsg}</div>
            ) : (
              <div></div>
            )}
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
