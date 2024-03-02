import React, { useEffect, useState } from "react";
import axios from "axios";
import { LinearProgress } from "@mui/material";
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
  // Fetch API users

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        console.log(response);
        setDataUsers(response.data);
      })
      .catch(function (error) {
        setError(error.message);
      })
      .finally(function () {
        setLoadingProgress(false);
      });
  }, []);

  return (
    <>
      <h1>List Users</h1>
      {loadingProgress && <LinearProgress color="success" />}
      {error && <h4 style={{ color: "red" }}>{error}</h4>}
      {dataUsers.map((data) => (
        <li key={data.id}>{data.username}</li>
      ))}

      {/* materiel ui */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="right">name</TableCell>
              <TableCell align="right">username</TableCell>
              <TableCell align="right">email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataUsers.map((data) => (
              <TableRow
                key={data.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {data.id}
                </TableCell>
                <TableCell align="right">{data.name}</TableCell>
                <TableCell align="right">{data.username}</TableCell>
                <TableCell align="right">{data.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Users;
