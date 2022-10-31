import React, { useEffect, useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useNavigate } from "react-router-dom";

import { Menu, MenuItem } from "@mui/material";
import NotifBadge from "./notifications/NotifBadge";
import NotifItem from "./notifications/NotifItem";

import SearchBar from "./SearchBar";
import NormalRegular from "./texts/NormalRegular";
import LargeBold from "./texts/LargeBold";
import Utils from "../helper/Utils";

import { Context } from "../store/store";

function MainNavigation() {
  // const [isAuth, setIsAuth] = useState(false);
  const [isNotifLoading, setIsNotifLoading] = useState(false);
  const [notifs, setNotifs] = useState([]);
  const [notifAnchorElm, setNotifAnchorElm] = useState(null);
  const [notifOpen, setNotifOpen] = useState(false);
  const [state, dispatch] = useContext(Context);

  const notifRef = useRef(null);
  const navigate = useNavigate();

  const getNotificationsHandler = () => {
    setIsNotifLoading(true);
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    const reqData = {
      token: token,
      queryParams: {
        userId: userId,
      },
    };
    Utils.getProtectedApi("/wishlists/getNotifications", reqData)
      .then((res) => {
        if (res.message && res.message == "Unauthenticated") {
          console.log("Unauthenticated");
          setIsNotifLoading(false);
          return;
        }

        if (res.message && res.message == "Not found") {
          setNotifs([]);
          setIsNotifLoading(false);
          return;
        }

        for (let notif of res.data) {
          setNotifs((notifs) => {
            if (
              notifs.some((notification) => {
                return notification.notifId == notif.notif_item_id;
              })
            ) {
              return notifs;
            } else {
              return [
                ...notifs,
                {
                  notifId: notif.notif_item_id,
                  notifUserId: notif.notif_user_id,
                  notifProductId: notif.notif_product_id,
                  notifMessage: notif.notif_message,
                  notifTimeStamp: new Date(notif.notif_timestamp),
                  notifIsRead: notif.notif_read,
                  productImageUrl:
                    "http://localhost:8080/images/" + notif.product_imageurl,
                },
              ];
            }
          });
        }
        setIsNotifLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUnreadNotifCounts = () => {
    let count = 0;

    for (let notif of notifs) {
      if (notif.notifIsRead == 0) {
        count++;
      }
    }

    return count;
  };

  useEffect(() => {
    getNotificationsHandler();
    const interval = setInterval(() => {
      getNotificationsHandler();
    }, 10 * 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Functions to display notificaiton menu STEP
  const onCloseNotifsHandler = () => {
    setNotifOpen(false);
  };

  // Function to verify JWT token STEP
  // const verifyTokenHandler = () => {
  //   const token = localStorage.getItem("token");
  //   const userId = localStorage.getItem("userId");

  //   const reqData = {
  //     token: token,
  //     queryParams: {
  //       userId: userId,
  //     },
  //   };

  //   Utils.getProtectedApi("/users/verifyJWT", reqData)
  //     .then((res) => {
  //       if (res.message && res.message == "Unauthenticated") {
  //         setIsAuth(false);
  //       } else {
  //         setIsAuth(true);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   verifyTokenHandler();
  // }, []);

  if (state.userDetails.token) {
    return (
      <header className={classes.header}>
        <nav>
          <div className={classes.navContainer}>
            <div className={classes.titleContainer}>
              <Link to="/">
                <LargeBold text="PriceFix" />
              </Link>
            </div>

            <div className={classes.authedSearchBar}>
              <SearchBar placeholder="Search" />
            </div>

            <ul className={classes.authedUlContainer}>
              <div
                className={classes.authedLinkContainer}
                onClick={() => {
                  navigate("/wishlist");
                }}
              >
                <NormalRegular text="Wish List" />
              </div>

              <NotifBadge
                innerRef={notifRef}
                notifCount={getUnreadNotifCounts()}
                openNotifMenuHandler={() => {
                  setNotifAnchorElm(notifRef.current);
                  setNotifOpen(true);
                }}
              />
              <Menu
                anchorEl={notifAnchorElm}
                open={notifOpen}
                onClose={onCloseNotifsHandler}
              >
                <div style={{ height: notifs.length * 70, width: 300 }}>
                  {notifs.map((notif) => {
                    return <NotifItem key={notif.notifId} notif={notif} />;
                  })}
                </div>
              </Menu>

              <li className={`btn--black ${classes.userContainer}`}>
                <div
                  onClick={() => {
                    navigate("/profile");
                  }}
                >
                  <b>{JSON.parse(localStorage.getItem("userName"))}</b>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  } else {
    return (
      <header className={classes.header}>
        <nav>
          <div className={classes.navContainer}>
            <div className={classes.titleContainer}>
              <Link to="/">
                <LargeBold text="PriceFix" />
              </Link>
            </div>

            <div className={classes.notAuthedSearchBar}>
              <SearchBar placeholder="Search" />
            </div>

            <ul className={classes.notAuthedUlContainer}>
              <li className={`btn--black ${classes.notAuthedBtn}`}>
                <div
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  <b>Log in</b>
                </div>
              </li>

              <li className={`btn--white ${classes.notAuthedBtn}`}>
                <div
                  onClick={() => {
                    navigate("/sign-up");
                  }}
                >
                  <b>Sign Up</b>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default MainNavigation;
