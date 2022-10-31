import classes from "./STPModalButton.module.css";
import SmallRegular from "../texts/SmallRegular";
import { MdOutlineCancel } from "react-icons/md";

function CancelButton(props) {
    // Run this later: npm install --save react-icons
  
    return (
      <span>
        <div
          className={`btn--red ${classes.btnContainer}`}
          onClick={props.onClickHandler}
        >
          <div className={classes.iconContainer}>
            <MdOutlineCancel size={22} />
          </div>
          <div className={classes.textContainer}>
            <SmallRegular text="Cancel" />
          </div>
        </div>
      </span>
    );
  }
  
  export default CancelButton;