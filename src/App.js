import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MainNavigation from "./components/MainNavigation";

function App() {
  return (
    <MainNavigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </MainNavigation>
  );
}

export default App;
