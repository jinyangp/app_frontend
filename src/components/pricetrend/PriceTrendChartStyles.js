import { makeStyles } from "@material-ui/core/styles";
import { maxWidth } from "@mui/system";

export default makeStyles(() => ({
  root: {
    height: 650,
  },

  timeStampContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: 200,
    height: 50,
    marginBottom: 15,
  },

  textContainer: {
    width: "60%",
    height: "100%",
    paddingTop: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  menuTextContainer: {
    width: "35%",
    height: "80%",
    paddingTop: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#454552",
    borderRadius: 5,
  },

  timeStampText: {
    color: "white",
  },

  menu: {
    width: 140,
  },

  menuItem: {
    border: "2px solid blue",
    width: "100%",
    height: 40,
    paddingTop: 10,
    lineHeight: "200%",
    verticalAlign: "middle",
  },

  chartContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    maxWidth: "100%",
    width: "100%",
    height: "90%",
  },
}));
