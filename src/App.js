import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SearchProducts from "./pages/SearchProducts";
import Wishlist from "./pages/Wishlist";
import ItemDetails from "./pages/ItemDetails"
import Profile from "./pages/Profile";

function App() {
  return (
    //initialising the user as null as he is not logged in
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:catId" element={<SearchProducts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/item-details/:itemId" element={<ItemDetails/>}/>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
