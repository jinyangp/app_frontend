import React, { useContext, useState } from "react";
import LogInForm from "../components/authentication/LogInForm";
import Utils from "../helper/Utils";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/store";

function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [state, dispatch] = useContext(Context);

  const onLogInHandler = (logInData) => {
    setIsLoading(true);
    setErrorMessage("");
    // Receive my user data from argument userData
    // Make an API request
    Utils.getApi("/users/login", logInData)
      .then((res) => {
        console.log(res);

        // user log in successfully
        if (res.status === 200) {
          console.log("successful log in");

          // store user in local storage
          localStorage.setItem("userId", JSON.stringify(res.data.userId));
          localStorage.setItem("userName", JSON.stringify(res.data.userName));
          localStorage.setItem(
            "userImage",
            JSON.stringify(res.data.userImageUrl)
          );
          localStorage.setItem("token", JSON.stringify(res.data.token));
          localStorage.setItem(
            "wishlistIds",
            JSON.stringify(res.data.wishlistIds)
          );

          // dispatch an action to update redux store STEP
          dispatch({
            type: "LOG_IN",
            payload: {
              userId: res.data.userId,
              userName: res.data.userName,
              userImage: res.data.userImageUrl,
              token: res.data.token,
              wishlistIds: res.data.wishlistIds,
            },
          });

          // redirect to Home page
          navigate("/");

          //user types in wrong username/pw
        } else if (res.message && res.message === "Unauthenticated") {
          setErrorMessage("Invalid Credentials");
        }

        // Not successful - display an error message
        if (res.message && res.message === "Unknown error") {
          setErrorMessage("Server error. Please try again.");
        }

        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        // Show error
      });
  };
  return (
    <section>
      <h3>PriceFix</h3>
      <h4>Welcome Back, it's good to see you again!</h4>
      <div>
        <LogInForm
          onLogIn={onLogInHandler}
          isLoading={isLoading}
          errorMsg={errorMessage}
        />
      </div>
    </section>
  );
}

export default Login;
