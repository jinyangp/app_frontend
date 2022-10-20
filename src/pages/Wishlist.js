import AddToWishlistButton from "../components/buttons/AddToWishlistButton";
import MainNavigation from "../components/MainNavigation";

function Wishlist(props) {
  return (
    <section>
      <div>
        <MainNavigation />
        <AddToWishlistButton />
      </div>
    </section>
  );
}

export default Wishlist;
