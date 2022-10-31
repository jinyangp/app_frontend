import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SearchProductsByCategory from "./pages/SearchProductsByCat";
import Wishlist from "./pages/Wishlist";
import ItemDetails from "./pages/ItemDetails";
import Profile from "./pages/Profile";

import Store from "./store/store";

function App() {
  return (
    <div>
      <Store>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/category/:catId"
            element={<SearchProductsByCategory />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/item-details/:itemId" element={<ItemDetails />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Store>
    </div>
  );
}

export default App;
