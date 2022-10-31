import MainNavigation from "../components/MainNavigation";
import AddToWishlistButton from "../components/buttons/AddToWishlistButton";

function Wishlist(props) {
  return (
    <div className="default-page-margin">
      <MainNavigation />
      <AddToWishlistButton />
    </div>
  );
}

export default Wishlist;
