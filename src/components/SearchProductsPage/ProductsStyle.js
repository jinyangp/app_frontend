import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    width: 450,
    height: 400,
    maxWidth: "100%",
    maxHeight: "100%",
    padding: 5,
    borderRadius: 10,
    backgroundColor: "white",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
  },
  media: {
    height: "60%",
    width: "100%",
    // borderRadius: 40,
    paddingTop: "56.25",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    height: "25%",
    textAlign: "center",
    lineHeight: "200%",
    display: "flex",
    justifyContent: "space-between",
  },

  buttonContainer: {
    borderColor: "transparent",
    backgroundColor: "transparent",
  },

  platformContainer: {
    backgroundColor: "#454552",
    height: 30,
    width: 80,
    borderRadius: 5,
    textAlign: "center",
  },

  platformText: {
    color: "white",
  },
}));
