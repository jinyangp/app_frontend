import { makeStyles } from "@material-ui/core/styles";
import { findByLabelText } from "@testing-library/react";

export default makeStyles(() => ({
  rootWideScreen: {
    width: 700,
    height: 300,
    maxWidth: "100%",
    maxHeight: "100%",
    padding: 5,
    borderRadius: 10,
    backgroundColor: "white",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
    display: "flex",
  },
  media: {
    padding: "20%",
    height: "100%",
    width: "50%",
    marginRight: 10,  
  },

  rootLaptop: {
    width: 500,
    height: 300,
    maxWidth: "100%",
    maxHeight: "100%",
    padding: 5,
    borderRadius: 10,
    backgroundColor: "white",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
    display: "flex",
  },



  detailsContainer: {
    padding: 5,
    width: "80%",
    marginTop: "auto",
    marginBottom: "auto",
  },

  productNameContainer: {
    textAlign: "left",
    verticalAlign: "middle",
    width: "100%",
    lineHeight: "150%",
  },

  platformContainer: {
    backgroundColor: "#454552",
    height: 20,
    width: 80,

    borderRadius: 5,
    textAlign: "center",
  },

  platformText: {
    color: "white",
  },

  doubleRow: {
    display:"flex",
    direction:"row",
    gap: 10,
    alignItems:"baseline",
    },

  priceContainer: {
    paddingTop: "5%",
    textAlign: "left",
  },
}));
