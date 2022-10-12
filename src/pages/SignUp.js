import { useNavigate } from "react-router-dom";
import NewSignUpForm from "../components/authentication/NewSignUpForm";
import Utils from "../helper/Utils";

function SignUp() {
  // const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const onSignUpHandler = (userData) => {
    // Receive my user data from argument userData
    // Make an API request
    Utils.postApi("/users/signup", userData)
      .then((res) => {
        console.log("whole res object is");
        console.log(res);
        console.log("res status is");
        console.log(res.status);

        // Not successful - display an error message
        if (res.status === 500) {
          console.log("error");
        }

        // user created successfully,
        else if (res.status === 201) {
          console.log("successful signup");
          // redirect to login page
          navigate("/login");
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
