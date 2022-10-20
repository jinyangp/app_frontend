import { useNavigate } from "react-router-dom";
import NewSignUpForm from "../components/authentication/NewSignUpForm";
import Utils from "../helper/Utils";
import { useState } from "react";

function SignUp() {
  // const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSignUpHandler = (userData) => {
    setIsLoading(true);
    setErrorMessage("");

    //checking the password matches
    //if it matches, create a new object with just attributes: username, email, password
    if (userData.userPassword === userData.userConfirmPassword) {
      const finalUserData = {
        userName: userData.userName,
        userEmail: userData.userEmail,
        userPassword: userData.userPassword,
      };

      // Receive my user data from argument finalUserData
      // Make an API request
      Utils.postApi("/users/signup", finalUserData)
        .then((res) => {
          console.log("whole res object is");
          console.log(res);
          console.log("res status is");
          console.log(res.status);

          // Not successful - display an error message
          if (res.message && res.message === "Unknown error") {
            setErrorMessage("Server error. Please try again.");
          }

          // user created successfully,
          else if (res.status === 201) {
            console.log("successful signup");
            // redirect to login page
            navigate("/login");
          }
          // Do something based on my results
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          // Show error
        });
    }
    //if passwords dont match, do nothing
    else {
      setErrorMessage("Password does not match");
      setIsLoading(false);
    }
  };

  return (
    <section>
      <h3>PriceFix</h3>
      <h4>Create your PriceFix account</h4>
      <NewSignUpForm
        onAddUser={onSignUpHandler}
        isLoading={isLoading}
        errorMsg={errorMessage}
      />
    </section>
  );
}

export default SignUp;
