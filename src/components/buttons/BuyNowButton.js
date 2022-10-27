import classes from "./BuyNowButton.module.css";
import SmallRegular from "../texts/SmallRegular";
import { HiOutlineShoppingBag } from "react-icons/hi";

function BuyNowButton(props) {
  // Run this later: npm install --save react-icons

  return (
    <span>
      <div
        className={`btn--black ${classes.btnContainer}`}
        onClick={props.onClickHandler}
      >
        <div className={classes.iconContainer}>
          <HiOutlineShoppingBag size={22} />
        </div>
        <div className={classes.textContainer}>
          <SmallRegular text="Buy Now" />
        </div>
      </div>
    </span>
  );
}

export default BuyNowButton;