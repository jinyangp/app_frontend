import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    width: 450,
    height: 250,
    maxWidth: "100%",
    maxHeight: "100%",
    padding: 5,
    borderRadius: 10,
    backgroundColor: "white",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
  },

  media: {
    height: "75%",
    width: "100%",
    // paddingTop: "56.25",
  },
  cardContent: {
    height: "25%",
    textAlign: "center",
    lineHeight: "200%",
    display: "flex",
    justifyContent: "space-between",
  },

  productCountContainer: {
    backgroundColor: "#454552",
    height: 30,
    width: 80,
    borderRadius: 5,
  },

  productCountText: {
    color: "white",
  },
}));
