import React, { useEffect, useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";

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
  const [unreadNotifCount, setUnReadNotifCount] = useState(0);
  const [notifAnchorElm, setNotifAnchorElm] = useState(null);
  const [notifOpen, setNotifOpen] = useState(false);
  const [isReadingNotif, setIsReadingNotif] = useState(false);
  const [state, dispatch] = useContext(Context);
  const notifRef = useRef(null);
  const [profileAnchorElm, setProfileAnchorElm] = useState(null);
  const profileOpen = Boolean(profileAnchorElm);

  // const [longUsername, setLongUsername] = useState(false);

  const navigate = useNavigate();

  const checkUsernameLength = () => {
    let longUsername = false;

    if (JSON.parse(localStorage.getItem("userName")).length > 9) {
      longUsername = true;
    }
    return longUsername;
  };

  const profileClickHandler = (event) => {
    setProfileAnchorElm(event.currentTarget);
  };

  const profileCloseHandler = (event) => {
    setProfileAnchorElm(null);
  };

  const profileLogoutHandler = () => {
    //redirect to login page
    navigate("/");
    localStorage.clear();
    dispatch({ type: "LOG_OUT" });
    window.location.reload();
  };

  const getUnreadNotifCounts = (notifications) => {
    let count = 0;

    for (let notif of notifications) {
      if (notif.notif_read === 0) {
        count++;
      }
    }

    return count;
  };

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
        if (res.message && res.message === "Unauthenticated") {
          console.log("Unauthenticated");
          setIsNotifLoading(false);
          return;
        }

        if (res.message && res.message === "Not found") {
          setNotifs([]);
          setIsNotifLoading(false);
          return;
        }

        for (let notif of res.data) {
          setNotifs((notifs) => {
            if (
              notifs.some((notification) => {
                return notification.notifId === notif.notif_item_id;
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
        setUnReadNotifCount(getUnreadNotifCounts(res.data));
        setIsNotifLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
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

  const onReadNotifHandler = () => {
    setUnReadNotifCount((prevCount) => {
      return prevCount - 1;
    });
  };

  // Functions to display notificaiton menu STEP
  const onCloseNotifsHandler = () => {
    setNotifOpen(false);
  };

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
                notifCount={unreadNotifCount}
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
                    return (
                      <NotifItem
                        key={notif.notifId}
                        notif={notif}
                        onReadNotif={onReadNotifHandler}
                      />
                    );
                  })}
                </div>
              </Menu>

              <li className={`btn--black ${classes.userContainer}`}>
                <div>
                  <Button
                    id="basic-button"
                    aria-controls={profileOpen ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={profileOpen ? "true" : undefined}
                    onClick={profileClickHandler}
                    style={{
                      color: "white",
                      width: 120,
                      height: 40,
                    }}
                  >
                    <b>
                      {checkUsernameLength()
                        ? JSON.parse(localStorage.getItem("userName")).slice(
                            0,
                            8
                          ) + "..."
                        : JSON.parse(localStorage.getItem("userName"))}
                    </b>
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={profileAnchorElm}
                    open={profileOpen}
                    onClose={profileCloseHandler}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem
                      style={{
                        width: 120,
                        height: 20,
                        justifyContent: "center",
                      }}
                      onClick={profileLogoutHandler}
                    >
                      Logout
                    </MenuItem>
                  </Menu>
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
