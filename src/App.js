import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/search-bar" element={<SearchBar />} />
      </Routes>
    </div>
  );
}

export default App;
