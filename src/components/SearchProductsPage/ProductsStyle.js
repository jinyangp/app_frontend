import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    width: 500,
    height: 280,
    maxWidth: "100%",
    maxHeight: "100%",
    padding: 5,
    borderRadius: 10,
    backgroundColor: "white",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
    display: "flex",
    // justifyContent: "space-between",
  },
  media: {
    height: "100%",
    width: "100%",

    // borderRadius: 40,
    // paddingTop: "56.25",
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
    height: 21,
    width: 80,
    borderRadius: 5,
    // textAlign: "center",
    // paddingTop: "2.5%",
  },

  platformText: {
    color: "white",
  },

  textContainer: {
    padding: "5%",
  },

  alignLeft: {
    textAlign: "left",
  },

  priceContainer: {
    padding: "3%",
    textAlign: "left",
  },
}));
