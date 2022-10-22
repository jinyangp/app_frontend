import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SearchProducts from "./pages/SearchProducts";
import Wishlist from "./pages/Wishlist";
import ItemDetails from "./pages/ItemDetails"
import { UserContext } from "./components/UserContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  return (
    //initialising the user as null as he is not logged in
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:catId" element={<SearchProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/item-details" element={<ItemDetails/>}/>
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
