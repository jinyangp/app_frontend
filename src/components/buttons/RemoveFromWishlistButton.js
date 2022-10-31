import classes from "./RemoveFromWishlistbutton.module.css";
import SmallRegular from "../texts/SmallRegular";
import { IoHeartDislikeOutline } from "react-icons/io5";

function RemoveItemWishlistButton(props) {
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
