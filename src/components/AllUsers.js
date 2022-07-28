import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../service/api";
import {
  Table,
  TableHead,
  TableCell,
  Paper,
  TableRow,
  TableBody,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Modal from "./Modal";

const useStyles = makeStyles({
  table: {
    width: "90%",
    margin: "20px 0 0 80px",
  },
  thead: {
    "& > *": {
      fontSize: 20,
      background: "#000000",
      color: "#FFFFFF",
    },
  },
  row: {
    "& > *": {
      fontSize: 18,
    },
  },
});

const AllUsers = () => {
  const classes = useStyles();
  const [users, setUser] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [username, setuserName] = useState();
  const [email, setEmail] = useState();
  const [phone, setphone] = useState();

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const resp = await getUsers();
    console.log(resp);
    setUser(resp.data);
  };

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  const getData = (_id, name, username, email, phone) => {
    let user = [_id, name, username, email, phone];
    setUser((item) => [1, ...user]);
    setId(_id);
    setName(name);
    setuserName(username);
    setEmail(email);
    setphone(phone);
    // setUser({ ...user, name, username, email, phone });
    console.log(user);
    setModalOpen(true);
  };

  return (
    <>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {modalOpen && (
            <Modal
              setOpenModal={setModalOpen}
              setId={setId}
              id={id}
              setName={setName}
              name={name}
              setEmail={setEmail}
              email={email}
              setphone={setphone}
              phone={phone}
              setuserName={setuserName}
              username={username}
            />
          )}
          {users.map((user) => {
            return (
              <TableRow className={classes.row} key={user._id}>
                <TableCell>{user._id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <Button
                    color="primary"
                    variant="contained"
                    style={{ marginRight: 10 }}
                    component={Link}
                    to={`/edit/${user._id}`}
                    // onClick={() => {
                    //   setModalOpen(true);
                    // }}
                  >
                    <EditIcon />
                  </Button>
                  <Button
                    color="secondary"
                    variant="contained"
                    style={{ marginRight: 10 }}
                    onClick={() => deleteUserData(user._id)}
                  >
                    <DeleteIcon />
                  </Button>

                  <Button
                    color="secondary"
                    variant="contained"
                    className="openModalBtn"
                    onClick={() => {
                      getData(
                        user._id,
                        user.name,
                        user.username,
                        user.email,
                        user.phone
                      );
                      // setModalOpen(true);
                    }}
                  >
                    <EditIcon />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default AllUsers;
