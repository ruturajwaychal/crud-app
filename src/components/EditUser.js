import React, { useEffect, useState } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { editUser, getUsers } from "../service/api";
import { useHistory, useParams, Link } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: 20,
    },
  },
});

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const EditUser = () => {
  const classes = useStyles();
  const [user, setUser] = useState(initialValue);
  const { name, username, email, phone } = user;
  const { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    const resp = await getUsers(id);
    setUser(resp.data);
  };

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const editUserDetails = async () => {
    console.log("this is user", user);
    await editUser(id, user);
    history.push("./");
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={name}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Username</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="username"
          value={username}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="email"
          value={email}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Phone</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="phone"
          value={phone}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          className="footer-btn"
          onClick={() => editUserDetails()}
          component={Link}
          to={"/"}
        >
          Update User
        </Button>
      </FormControl>
    </FormGroup>
  );
};

export default EditUser;
