import LogInForm from "../components/authentication/LogInForm";

function Login() {
  const onLogInHandler = () => {};
  return (
    <section>
      <h3>PriceFix</h3>
      <h4>Welcome Back, it's good to see you again!</h4>
      <LogInForm onLogIn={onLogInHandler} />
    </section>
  );
}

export default Login;
