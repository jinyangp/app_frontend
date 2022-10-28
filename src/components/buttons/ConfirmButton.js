import classes from "./STPModalButton.module.css";
import SmallRegular from "../texts/SmallRegular";
import { FiSave } from "react-icons/fi";

function ConfirmButton(props) {
  // Run this later: npm install --save react-icons

  return (
    <span>
      <div
        className={`btn--black ${classes.btnContainer}`}
        onClick={props.onClickHandler}
      >
        <div className={classes.iconContainer}>
          <FiSave size={22} />
        </div>
        <div className={classes.textContainer}>
          <SmallRegular text="Confirm" />
        </div>
      </div>
    </span>
  );
}

export default ConfirmButton;