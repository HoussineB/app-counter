import React, { useEffect, useState } from "react";
import axios from "axios";
import { LinearProgress, Button, TextField } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Users = () => {
  const [dataUsers, setDataUsers] = useState([]);
  const [error, setError] = useState("");
  const [loadingProgress, setLoadingProgress] = useState(true);
  const [editingUser, setEditingUser] = useState(null);
  const [userData, setUserData] = useState({ name: "", email: "" });
  const apiEndpoint = "http://localhost:5001/api/users";

  const handleSaveUser = () => {
    const requestData = {
      name: userData.name,
      email: userData.email,
    };

    axios
      .post(apiEndpoint, requestData)
      .then((response) => {
        console.log(response.data);
        setDataUsers((prevUsers) => [...prevUsers, response.data]);
        setUserData({ name: "", email: "" });
      })
      .catch((error) => {
        console.error("Error while saving user:", error);
        setError(error.message);
      });
  };

  const handleEditUser = (userSelected) => {
    console.log(userSelected);
    setEditingUser(userSelected._id);
    setUserData(userSelected);
  };

  const handleUpdateUser = (userIdSelected) => {
    const apiEndpoint = `http://localhost:5000/api/users/${userIdSelected}`;

    const requestData = {
      name: userData.name,
      email: userData.email,
    };

    axios
      .put(apiEndpoint, requestData)
      .then(() => {
        setDataUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === userIdSelected ? { ...user, ...requestData } : user
          )
        );
        setEditingUser(null);
        setUserData({ name: "", email: "" });
      })
      .catch((error) => {
        console.error("Error while updating user:", error);
        setError(error.message);
      });
  };

  const handleDeleteUser = (userId) => {
    console.log(userId);
    const apiEndpoint = `http://localhost:5000/api/users/${userId}`;

    axios
      .delete(apiEndpoint)
      .then(() => {
        setDataUsers((prevUsers) =>
          prevUsers.filter((user) => user.id !== userId)
        );
        console.log("User deleted successfully.");
      })
      .catch((error) => {
        console.error("Error while deleting user:", error);
        setError(error.message);
      });
  };

  const handleDisplayUsers = () => {
    axios
      .get(apiEndpoint)
      .then(function (response) {
        setDataUsers(response.data);
      })
      .catch(function (error) {
        setError(error.message);
      })
      .finally(function () {
        setLoadingProgress(false);
      });
  };

  useEffect(() => {
    handleDisplayUsers();
  }, [dataUsers]);

  return (
    <>
      <h1>List Users</h1>
      {/* Formulaire d'ajout */}
      <div style={{ marginBottom: 20 }}>
        <TextField
          label="Name"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <TextField
          label="Email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <Button variant="contained" color="primary" onClick={handleSaveUser}>
          Add User
        </Button>
      </div>
      {loadingProgress && <LinearProgress color="success" />}
      {error && <h4 style={{ color: "red" }}>{error}</h4>}

      {/* Tableau d'utilisateurs */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="right">name</TableCell>
              <TableCell align="right">email</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataUsers.map((data) => (
              <TableRow
                key={data.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {data._id}
                </TableCell>
                <TableCell align="right">
                  {editingUser === data._id ? (
                    <TextField
                      value={userData.name}
                      onChange={(e) =>
                        setUserData({ ...userData, name: e.target.value })
                      }
                    />
                  ) : (
                    data.name
                  )}
                </TableCell>
                <TableCell align="right">
                  {editingUser === data._id ? (
                    <TextField
                      value={userData.email}
                      onChange={(e) =>
                        setUserData({ ...userData, email: e.target.value })
                      }
                    />
                  ) : (
                    data.email
                  )}
                </TableCell>
                <TableCell align="right">
                  {editingUser == data._id ? (
                    <Button onClick={() => handleUpdateUser(editingUser)}>
                      Update
                    </Button>
                  ) : (
                    <>
                      <Button onClick={() => handleEditUser(data)}>Edit</Button>
                      <Button onClick={() => handleDeleteUser(data._id)}>
                        Delete
                      </Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Users;
