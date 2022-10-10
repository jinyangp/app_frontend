import AddToWishlistButton from "../components/buttons/AddToWishlistButton";
import BuyNowButton from "../components/buttons/BuyNowButton";

function Wishlist(props) {
  return (
    <section>
      <div>
        <BuyNowButton />
        <AddToWishlistButton />
      </div>
    </section>
  );
}

export default Wishlist;
