import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SearchProducts from "./pages/SearchProducts";
import Wishlist from "./pages/Wishlist";
import { UserContext } from "./components/UserContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:catId" element={<SearchProducts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
