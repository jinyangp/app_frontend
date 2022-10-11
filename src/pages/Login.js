import LogInForm from "../components/authentication/LogInForm";

function Login() {
  const onLogInHandler = () => {};
  return (
    <section>
      <h3>PriceFix</h3>
      <h4>Welcome Back, it's good to see you again!</h4>
      <div>
        <LogInForm onLogIn={onLogInHandler} />
      </div>
    </section>
  );
}

export default Login;
