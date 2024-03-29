import classes from "./AddToWishlistButton.module.css";
import SmallRegular from "../texts/SmallRegular";
import { IoIosHeartEmpty } from "react-icons/io";

function AddToWishlistButton(props) {
  // Run this later: npm install --save react-icons

  return (
    <span>
      <div
        className={`btn--red ${classes.btnContainer}`}
        onClick={props.onClickHandler}
      >
        <div className={classes.iconContainer}>
          <IoIosHeartEmpty size={18} />
        </div>
        <div className={classes.textContainer}>
          <SmallRegular textStyles={classes.text} text="Add to Wish list" />
        </div>
      </div>
    </span>
  );
}

export default AddToWishlistButton;
