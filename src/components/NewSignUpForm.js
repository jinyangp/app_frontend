import { useRef } from "react";
import Card from "./Card";
import classes from "./NewSignUpForm.module.css";

function NewSignUpForm(props) {
  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    //   reading what the user entered
    const enteredUsername = usernameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmPassword = confirmPasswordInputRef.current.value;

    // Check whether the password matches

    // if they dont, show an error

    // If match, then proceed on to make api request

    //   creating the user object that the user entered
    const userData = {
      userName: enteredUsername,
      userEmail: enteredEmail,
      userPassword: enteredPassword,
    };

    props.onAddUser(userData);
  }

  return (
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
          <input type="text" required id="password" ref={passwordInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="text"
            required
            id="confirmPassword"
            ref={confirmPasswordInputRef}
          />
        </div>

        <div className={classes.actions}>
          <button>Sign Up</button>
        </div>
      </form>
    </Card>
  );
}

export default NewSignUpForm;
