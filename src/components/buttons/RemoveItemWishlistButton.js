import classes from "./WishlistCardButton.module.css";
import SmallRegular from "../texts/SmallRegular";
import { IoHeartDislikeOutline } from "react-icons/io5";

function RemoveItemWishlistButton(props) {
  // Run this later: npm install --save react-icons

  return (
    <span>
      <div
        className={`btn--red ${classes.btnContainer}`}
        onClick={props.onClickHandler}
      >
        <div className={classes.iconContainer}>
          <IoHeartDislikeOutline size={18} />
        </div>
        <div className={classes.textContainer}>
          <SmallRegular textStyles={classes.text} text="Remove Item" />
        </div>
      </div>
    </span>
  );
}

export default RemoveItemWishlistButton;