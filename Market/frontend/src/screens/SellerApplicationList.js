import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import axios from "axios";
import TextField from "@mui/material/TextField";
import TableBody from "@mui/material/TableBody";
import Typography from "@mui/material/Typography";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Modal from "@mui/material/Modal";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import ShortFooter from "../components/ShortFooter";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteUser, listUsers } from "../actions/userActions";
import { Container, Box } from "@mui/material";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { USER_DETAILS_RESET } from "../constants/userConstants";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function SellerApplicationList(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [application, setApplication] = useState([]);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userDelete = useSelector((state) => state.userDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = userDelete;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listUsers());
    dispatch({
      type: USER_DETAILS_RESET,
    });
  }, [dispatch, successDelete]);

  const deleteApplication = (id) => {
    axios.delete(`/api/application/${id}`);
    window.location.reload();
  };

  useEffect(() => {
    const getApplicant = async () => {
      try {
        const res = await axios.get(`/api/application/applicationList`);
        setApplication(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getApplicant();
  }, []);
  return (
    <div>
      <Container style={{ minHeight: "100vh", paddingBottom: 10 }}>
        <ToastContainer />
        <h1>Seller Application List</h1>

        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">ID</TableCell>
                  <TableCell align="left">Name</TableCell>

                  <TableCell align="left">Email</TableCell>
                  <TableCell align="left">Link to Work</TableCell>
                  <TableCell align="left">Style</TableCell>
                  <TableCell align="left">Approve</TableCell>
                  <TableCell align="left">Delete</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {application.map((app) => (
                  <TableRow key={app._id}>
                    <TableCell align="left">{app.userID}</TableCell>
                    <TableCell align="left">{app.fullName}</TableCell>
                    <TableCell align="left">{app.email}</TableCell>
                    <TableCell align="left">{app.link}</TableCell>
                    <TableCell align="left">{app.style}</TableCell>
                    <TableCell align="left">
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => navigate(`/user/${app.userID}/edit`)}
                      >
                        Approve
                      </Button>
                    </TableCell>
                    <TableCell align="left">
                      <Button
                        variant="contained"
                        color="error"
                        onClick={handleOpen}
                      >
                        Delete
                      </Button>
                    </TableCell>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          Are you sure you would like to delete this
                          application?
                        </Typography>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => {
                            deleteApplication(app._id);
                          }}
                        >
                          Delete
                        </Button>
                      </Box>
                    </Modal>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>

      <ShortFooter />
    </div>
  );
}
