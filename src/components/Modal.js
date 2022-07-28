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
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Modal.css";

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const EditModal = (props) => {
  // const classes = useStyles();
  const [user, setUser] = useState(initialValue);
  const {
    setId,
    id,
    name,
    username,
    email,
    phone,
    setOpenModal,
    setName,
    setEmail,
    setphone,
    setuserName,
  } = props;
  // const { id } = useParams();
  let history = useHistory();

  // useEffect(() => {
  //   loadUserData();
  // }, []);

  // const loadUserData = async () => {
  //   const resp = await getUsers(id);
  //   setUser(resp.data);
  // };

  // const onValueChange = (e) => {
  //   console.log(e.target.value);
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };

  const editUserDetails = async () => {
    const user = { id, name, username, email, phone };
    console.log(user);
    await editUser(id, user);
    history.push("/");
    setOpenModal(false);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <FormGroup>
          <Typography variant="h4">Edit User</Typography>
          <FormControl>
            <InputLabel htmlFor="my-input">Name</InputLabel>
            <Input
              onChange={(e) => setName(e.target.value)}
              name="name"
              value={name}
              id="my-input"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Username</InputLabel>
            <Input
              onChange={(e) => setuserName(e.target.value)}
              name="username"
              value={username}
              id="my-input"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Email</InputLabel>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              value={email}
              id="my-input"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Phone</InputLabel>
            <Input
              onChange={(e) => setphone(e.target.value)}
              name="phone"
              value={phone}
              id="my-input"
            />
          </FormControl>
          <FormControl>
            <Button
              className="btn1"
              variant="contained"
              color="primary"
              onClick={() => editUserDetails()}
            >
              Update User
            </Button>
          </FormControl>
        </FormGroup>
      </div>
    </div>
  );
};

export default EditModal;
