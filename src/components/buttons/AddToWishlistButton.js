import classes from "./AddToWishlistButton.module.css";
import SmallRegular from "../texts/SmallRegular";

function AddToWishlistButton(props) {
  // Run this later: npm install --save react-icons

  return (
    <div className={`btn--red ${classes.btnContainer}`}>
      {/* <IoIosHeartEmpty /> */}
      <SmallRegular text="Add to Wish list" />
    </div>
  );
}

export default AddToWishlistButton;
