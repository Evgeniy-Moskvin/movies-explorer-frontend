import React from 'react';
import { Outlet, Navigate} from "react-router-dom";

const UserRoute = ({ loggedIn }) => {
  return loggedIn ? (
    <Navigate to='/movies'/>
  ) : (
    <Outlet/>
  );
};

export default UserRoute;
