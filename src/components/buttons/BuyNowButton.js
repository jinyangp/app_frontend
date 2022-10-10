import classes from "./BuyNowButton.module.css";
import SmallRegular from "../texts/SmallRegular";
import { BsHandbag } from "react-icons/bs";

function BuyNowButton(props) {
  return (
    <span>
      <div
        className={`btn--black ${classes.btnContainer}`}
        onClick={props.onClickHandler}
      >
        <div className={classes.iconContainer}>
          <BsHandbag size={22} />
        </div>
        <div className={classes.textContainer}>
          <SmallRegular text="Buy Now" />
        </div>
      </div>
    </span>
  );
}

export default BuyNowButton;
