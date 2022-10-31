import MainNavigation from "../components/MainNavigation";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  function logoutHandler(event) {
    localStorage.clear();
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
