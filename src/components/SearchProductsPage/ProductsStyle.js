import { makeStyles } from "@material-ui/core/styles";
import { findByLabelText } from "@testing-library/react";

export default makeStyles(() => ({
  root: {
    width: 700,
    height: 300,
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
    padding: "20%",
    height: "100%",
    width: "50%",

    // borderRadius: 40,
    // paddingTop: "56.25",
  },
  // cardActions: {
  //   display: "flex",
  //   justifyContent: "flex-end",
  // },
  // cardContent: {
  //   height: "25%",
  //   textAlign: "center",
  //   lineHeight: "200%",
  //   display: "flex",
  //   justifyContent: "space-between",
  // },

  buttonContainer: {
    borderColor: "transparent",
    backgroundColor: "transparent",
  },

  platformContainer: {
    backgroundColor: "#454552",
    height: 22,
    width: 80,
    borderRadius: 5,
  },

  platformText: {
    color: "white",
  },

  textContainer: {
    padding: "5%",
    lineHeight: "150%",
  },

  alignLeft: {
    textAlign: "left",
  },

  priceContainer: {
    paddingTop: "5%",
    textAlign: "left",
  },
}));
