import { useContext } from "react";
import MainNavigation from "../components/MainNavigation";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/store";

function Profile() {
  const [state, dispatch] = useContext(Context);

  const navigate = useNavigate();
  function logoutHandler(event) {
    localStorage.clear();
    dispatch({ type: "LOG_OUT" });
    navigate("/");
  }

  return (
    <div className="default-page-margin">
      <MainNavigation />
      <div>{localStorage.getItem("userId")}</div>
      <div>{localStorage.getItem("userName")}</div>
      <div>{localStorage.getItem("userImage")}</div>
      <div>{localStorage.getItem("token")}</div>
      <button onClick={logoutHandler}>logout</button>
    </div>
  );
}

export default Profile;
