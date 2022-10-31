import classes from "./RemoveFromWishlistbutton.module.css";
import SmallRegular from "../texts/SmallRegular";
import { IoMdHeartDislike } from "react-icons/io";

function RemoveFromWishlistButton(props) {
  return (
    <span>
      <div
        className={`btn--red ${classes.btnContainer}`}
        onClick={props.onClickHandler}
      >
        <div className={classes.iconContainer}>
          <IoMdHeartDislike size={18} />
        </div>
        <div className={classes.textContainer}>
          <SmallRegular
            textStyles={classes.text}
            text="Remove from Wish list"
          />
        </div>
      </div>
    </span>
  );
}

export default RemoveFromWishlistButton;
