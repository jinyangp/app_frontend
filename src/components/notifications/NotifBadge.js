import React, { forwardRef } from "react";
import { Badge } from "@material-ui/core";

import useStyles from "./NotifBadgeStyles";
import NormalRegular from "../texts/NormalRegular";

const NotifBadge = (props) => {
  const classes = useStyles();

  return (
    <Badge
      classes={{ badge: classes.root }}
      max={100}
      badgeContent={props.notifCount}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <div ref={props.innerRef} onClick={props.openNotifMenuHandler}>
        <NormalRegular text="Notifications" />
      </div>
    </Badge>
  );
};

export default forwardRef((props, ref) => (
  <NotifBadge innerRef={ref} {...props} />
));
