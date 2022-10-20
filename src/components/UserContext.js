/*
This is a file to set up a usercontext, so that when a user is logged in, this log in user object can be shared with the whole app
*/

import { createContext } from "react";

export const UserContext = createContext();
