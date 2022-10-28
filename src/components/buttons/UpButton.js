import classes from "./ArrowButton.module.css";
import SmallRegular from "../texts/SmallRegular";
import { BiUpArrow } from "react-icons/bi";

function UpButton(props) {
  // Run this later: npm install --save react-icons

  return (
    <span>
      <div
        className={`btn--black ${classes.btnContainer}`}
        onClick={props.onClickHandler}
      >
        <div>
          <BiUpArrow size={22} />
        </div>
      </div>
    </span>
  );
}

export default UpButton;