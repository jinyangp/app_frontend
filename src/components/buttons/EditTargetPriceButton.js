import classes from "./WishlistCardButton.module.css";
import SmallRegular from "../texts/SmallRegular";
import { RiEditLine } from "react-icons/ri";

function EditTargetPriceButton(props) {
  // Run this later: npm install --save react-icons

  return (
    <span>
      <div
        className={`btn--black ${classes.btnContainer}`}
        onClick={props.onClickHandler}
      >
        <div className={classes.iconContainer}>
          <RiEditLine size={18} />
        </div>
        <div className={classes.textContainer}>
          <SmallRegular textStyles={classes.text} text="Edit Target Price" />
        </div>
      </div>
    </span>
  );
}

export default EditTargetPriceButton;