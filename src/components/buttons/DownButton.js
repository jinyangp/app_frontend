import classes from "./ArrowButton.module.css";
import SmallRegular from "../texts/SmallRegular";
import { BiDownArrow } from "react-icons/bi";

function DownButton(props) {
  // Run this later: npm install --save react-icons

  return (
    <span>
      <div
        className={`btn--black ${classes.btnContainer}`}
        onClick={props.onClickHandler}
      >
        <div>
          <BiDownArrow size={22} />
        </div>
      </div>
    </span>
  );
}

export default DownButton;