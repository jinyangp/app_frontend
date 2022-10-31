import React from "react";
import { useNavigate } from "react-router-dom";

import classes from "./NotifItem.module.css";
import Utils from "../../helper/Utils";
import SmallRegular from "../texts/SmallRegular";

const NotifItem = ({ notif }) => {
  const navigate = useNavigate();

  const onClickNotifHandler = () => {
    if (notif.notifIsRead == 1) {
      navigate(`/item-details/${notif.notifProductId}`, {
        state: {
          productId: notif.notifProductId,
        },
      });
    } else {
      Utils.putApi("/wishlists/markNotificationAsRead", {
        token: localStorage.getItem("token"),
        body: {
          notifId: notif.notifId,
        },
      })
        .then((res) => {
          navigate(`/item-details/${notif.notifProductId}`, {
            state: {
              productId: notif.notifProductId,
            },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const getTimeStampHandler = (timeStamp) => {
    const secondElapsed = (new Date() - timeStamp.getTime()) / 1000;

    // If timestamp is less than a minute, put no. of seconds
    if (secondElapsed < 60) {
      return `${secondElapsed.toString()} seconds ago`;
    }

    // If timestamp is less than an hour, put no. of minutes
    else if (secondElapsed < 60 * 60) {
      return `${Math.floor(secondElapsed / 60).toString()} minutes ago`;
    }

    // Else, put no. of hours
    else if (secondElapsed < 60 * 60 * 24) {
      return `${Math.floor(secondElapsed / (60 * 60)).toString()} hours ago`;
    }

    // ELse, put no. of days
    else {
      return `${Math.floor(
        secondElapsed / (60 * 60 * 24)
      ).toString()} days ago`;
    }
  };

  return (
    <div className={classes.mainContainer} onClick={onClickNotifHandler}>
      <div className={classes.imgContainer}>
        <img src={notif.productImageUrl} className={classes.image} />
      </div>

      <div className={classes.textContainer}>
        <div className={classes.messageContainer}>
          <SmallRegular text={notif.notifMessage} />
        </div>
        <div className={classes.timestampContainer}>
          <SmallRegular
            textStyles={classes.timestampText}
            text={getTimeStampHandler(notif.notifTimeStamp)}
          />
        </div>
      </div>

      {notif.notifIsRead == 0 ? (
        <div className={classes.unreadIconContainer}>
          <div className={classes.unreadIcon}></div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NotifItem;
