import React from "react";
import { AppBar, Toolbar, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  header: {
    background: "#111111",
  },
  tabs: {
    color: "#FFFFFF",
    marginRight: 20,
    textDecoration: "none",
    fontSize: 20,
  },
});

const Navbar = () => {
  const classes = useStyle();
  return (
    <>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Link className={classes.tabs}>CRUD Operation</Link>
          <Link className={classes.tabs} to="/">
            All Users
          </Link>
          <Link className={classes.tabs} to="/adduser">
            {" "}
            Add User
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
