import NewSignUpForm from "../components/NewSignUpForm";
import Utils from "../helper/Utils";

function SignUp() {
  const onSignUpHandler = (userData) => {
    // Receive my user data from argument userData
    // Make an API request
    Utils.postApi("/users/signup", userData)
      .then((res) => {
        console.log("my results is");
        console.log(res);

        // Not successful - display an error message
        if (res.status == 500) {
          console.log("error");
        }

        // user created successfully,
        else if (res.status == 201) {
          console.log("success");
          // redirect to login page
        }
        // Do something based on my results
      })
      .catch((err) => {
        console.log(err);
        // Show error
      });
  };

  return (
    <section>
      <h3>PriceFix</h3>
      <h4>Create your PriceFix account</h4>
      <NewSignUpForm onAddUser={onSignUpHandler} />
    </section>
  );
}

export default SignUp;
