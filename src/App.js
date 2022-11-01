import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SearchProductsByCategory from "./pages/SearchProductsByCat";
import SearchProductsByName from "./pages/SearchProductsByName";
import Wishlist from "./pages/Wishlist";
import ItemDetails from "./pages/ItemDetails";
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
          <Route
            path="/products/:searchQuery"
            element={<SearchProductsByName />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/item-details/:itemId" element={<ItemDetails />} />
        </Routes>
      </Store>
    </div>
  );
}

export default App;
