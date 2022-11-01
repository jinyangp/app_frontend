import React, { useState, useRef, useEffect } from "react";
import { Card } from "@material-ui/core";
import ReactHighCharts from "react-highcharts/ReactHighcharts.src";
import { Menu, MenuItem } from "@mui/material";
import moment from "moment";

import useStyles from "./PriceTrendChartStyles";
import NormalRegular from "../texts/NormalRegular";
import NormalBold from "../texts/NormalBold";

const PriceTrendChart = ({ prices, avgPrice, updateTimeStamp }) => {
  const classes = useStyles();
  const options = { style: "currency", currency: "USD" };
  const numberFormat = new Intl.NumberFormat("en-US", options);
  const menuAnchorRef = useRef(null);
  const [menuAnchorElm, setMenuAnchorElm] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [timeStampLimit, setTimeStampLimit] = useState("2 weeks");

  const configPrice = {
    yAxis: [
      {
        offset: 30,
        allowOverlap: false,
        labels: {
          formatter: function () {
            return numberFormat.format(this.value);
          },
          x: -10,
          style: {
            color: "#000",
            position: "absolute",
          },
          align: "right",
        },
        title: {
          text: "Price",
        },
        min: avgPrice * 0.5,
        max: avgPrice * 1.5,
      },
    ],
    tooltip: {
      shared: true,
      formatter: function () {
        return (
          numberFormat.format(this.y, 0) +
          "</b><br/>" +
          moment(this.x).format("MMMM Do YYYY, h:mm")
        );
      },
    },

    xAxis: {
      type: "date",
      labels: {
        formatter: function () {
          return moment(this.value).format("MMMM Do YYYY");
        },
        rotation: -30,
      },
    },

    plotOptions: {
      series: {
        showInNavigator: true,
        gapSize: 6,
      },
    },
    rangeSelector: {
      selected: 1,
    },
    title: {
      text: "Price trends",
    },
    chart: {
      reflow: true,
      height: 550,
      width: 1000,

      style: {
        fontFamily: "Poppins",
        fontSize: "12px",
      },
    },

    credits: {
      enabled: false,
    },

    legend: {
      enabled: true,
    },

    series: prices,
  };

  const openMenuHandler = () => {
    setMenuAnchorElm(menuAnchorRef.current);
    setMenuOpen(true);
  };

  return (
    <div className={classes.root}>
      <Card className={classes.timeStampContainer}>
        <div className={classes.textContainer}>
          <NormalBold text="Time Period" />
        </div>
        <div
          className={classes.menuTextContainer}
          ref={menuAnchorRef}
          onClick={openMenuHandler}
        >
          <NormalRegular
            textStyles={classes.timeStampText}
            text={timeStampLimit}
          />
        </div>
        <Menu
          className={classes.menu}
          anchorEl={menuAnchorElm}
          open={menuOpen}
          onClose={() => {
            setMenuOpen(false);
          }}
        >
          <MenuItem
            className={classes.menuItem}
            onClick={() => {
              setTimeStampLimit("2 weeks");
              setMenuOpen(false);
              updateTimeStamp("2 weeks");
            }}
          >
            <NormalRegular text="2 weeks" />
          </MenuItem>
          <MenuItem
            className={classes.menuItem}
            onClick={() => {
              setTimeStampLimit("1 month");
              setMenuOpen(false);
              updateTimeStamp("1 month");
            }}
          >
            <NormalRegular text="1 month" />
          </MenuItem>
        </Menu>
      </Card>

      <Card className={classes.chartContainer}>
        <ReactHighCharts className={classes.chart} config={configPrice} />
      </Card>
    </div>
  );
};

export default PriceTrendChart;
