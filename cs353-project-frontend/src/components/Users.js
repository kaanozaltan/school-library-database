import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../store/actions/login.actions.js";
import {
    bringSportActivityTimes,
    reserve,
} from "../store/actions/reservation.actions.js";
import ReactPhoneInput from "react-phone-input-material-ui";
import { useNavigate } from "react-router-dom";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import StepConnector, {
    stepConnectorClasses,
} from "@mui/material/StepConnector";

import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
// import SearchBar from "material-ui-search-bar";
import Modal from "@mui/material/Modal";
const theme = createTheme();

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Users() {
    const [values, setValues] = useState({
        choosedStudent: {},
    });
    console.log(values.choosedStudent);
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const [openAssignModal, setOpenAssignModal] = React.useState(false);

    const students = [
        {
            user_id: 21902474,
            last_name: "Gulnaroglu",
        },
        {
            user_id: 21901212,
            last_name: "Ozaltan",
        },
    ];

    const handleClose = () => {
        setOpen(false);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        // console.log(values);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const currentState = useSelector((state) => {
        console.log(state);
        return state;
    });

    return (
        <>
            {/* <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Do you approve the reservation?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        You are about to reserve a
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        variant="contained"
                        color="error"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={() => {
                            return null;
                        }}
                        color="success"
                        variant="contained"
                    >
                        Reserve
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={open2}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose2}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Response from server"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        "dasa"
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose2}
                        variant="contained"
                        color="error"
                    >
                        Stay here
                    </Button>
                    <Button
                        onClick={() => {
                            navigate("/myReservations");
                        }}
                        color="success"
                        variant="contained"
                    >
                        Go to my reservations
                    </Button>
                </DialogActions>
            </Dialog> */}
            {/* <Modal
                open={openAssignModal}
                onClose={() => {
                    setOpenAssignModal(false);
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {false ? (
                        <CircularProgress />
                    ) : (
                        <>
                            {" "}
                            <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h2"
                            >
                                User {values.choosedStudent}
                            </Typography>
                            <SearchBar
                                value={values.assignStudentSearchText}
                                onChange={(newValue) => null}
                                onRequestSearch={() => {
                                    return null;
                                }}
                            />
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Student ID</TableCell>
                                        <TableCell>Last Name</TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>View Items</TableCell>
                                        <TableCell>
                                            <Button
                                                color="success"
                                                style={{
                                                    backgroundColor: "green",
                                                    color: "white",
                                                    padding: "5px",
                                                    borderRadius: "3px",
                                                }}
                                            >
                                                On-Hold
                                            </Button>
                                            <Button
                                                color="success"
                                                style={{
                                                    backgroundColor: "green",
                                                    color: "white",
                                                    padding: "5px",
                                                    borderRadius: "3px",
                                                }}
                                            >
                                                Borrowed
                                            </Button>
                                            <Button
                                                color="success"
                                                style={{
                                                    backgroundColor: "green",
                                                    color: "white",
                                                    padding: "5px",
                                                    borderRadius: "3px",
                                                }}
                                            >
                                                Returned
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Actions</TableCell>
                                        <TableCell>
                                            <Button
                                                color="success"
                                                style={{
                                                    backgroundColor: "green",
                                                    color: "white",
                                                    padding: "5px",
                                                    borderRadius: "3px",
                                                }}
                                            >
                                                On-Hold
                                            </Button>
                                            <Button
                                                color="success"
                                                style={{
                                                    backgroundColor: "green",
                                                    color: "white",
                                                    padding: "5px",
                                                    borderRadius: "3px",
                                                }}
                                            >
                                                Borrowed
                                            </Button>
                                            <Button
                                                color="success"
                                                style={{
                                                    backgroundColor: "green",
                                                    color: "white",
                                                    padding: "5px",
                                                    borderRadius: "3px",
                                                }}
                                            >
                                                Returned
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </>
                    )}
                </Box>
            </Modal> */}
            <ThemeProvider theme={theme}>
                <Box
                    xs={{ mt: 10 }}
                    style={{
                        margin: "auto",
                        marginTop: "50px",
                        maxWidth: "850px",
                    }}
                >
                    {/* <SearchBar
                        value={values.seaerchText}
                        onChange={(newValue) => null}
                        onRequestSearch={() => {
                            return null;
                        }}
                    /> */}
                    {students.length == -1 ? (
                        <>
                            <Box
                                sx={{
                                    display: "flex",
                                    textAlign: "center",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    margin: "auto",
                                    mt: 10,
                                    position: "absolute",
                                    left: "50%",
                                    top: "50%",
                                    transform: "translate(-50%, -50%)",
                                }}
                            >
                                <CircularProgress
                                    xs={{ textAlign: "center" }}
                                />
                            </Box>
                        </>
                    ) : (
                        <>
                            <Box
                                sx={{
                                    display: "flex",
                                    textAlign: "center",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    margin: "auto",
                                    mt: 5,
                                    mb: 5,
                                }}
                            >
                                <TableContainer
                                    sx={{
                                        minWidth: 650,
                                        maxWidth: 800,
                                        justifyContent: "center",
                                        textAlign: "center",
                                    }}
                                    component={Paper}
                                >
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>User ID</TableCell>
                                                <TableCell>Last Name</TableCell>
                                                <TableCell>Status</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {students.map((student, index) => {
                                                return (
                                                    <>
                                                        <TableRow
                                                            key={
                                                                student.user_id
                                                            }
                                                            sx={{
                                                                "&:last-child td, &:last-child th":
                                                                    {
                                                                        border: 0,
                                                                    },
                                                                minHeight:
                                                                    "100px",
                                                            }}
                                                        >
                                                            <TableCell>
                                                                {
                                                                    student.user_id
                                                                }
                                                            </TableCell>
                                                            <TableCell>
                                                                {
                                                                    student.last_name
                                                                }
                                                            </TableCell>
                                                            <TableCell>
                                                                <Button
                                                                    onClick={() => {
                                                                        setValues(
                                                                            {
                                                                                ...values,
                                                                                ["choosedStudent"]:
                                                                                    student,
                                                                            }
                                                                        );
                                                                        setOpenAssignModal(
                                                                            true
                                                                        );
                                                                    }}
                                                                    color="primary"
                                                                    variant="contained"
                                                                >
                                                                    Select
                                                                </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                    </>
                                                );
                                            })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </>
                    )}
                </Box>
            </ThemeProvider>
            <Modal
                open={openAssignModal}
                onClose={() => {
                    setOpenAssignModal(false);
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} style={{ minWidth: "fit-content" }}>
                    {Object.keys(values.choosedStudent).length == 0 ? (
                        <CircularProgress />
                    ) : (
                        <>
                            {" "}
                            <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h2"
                            >
                                User {values.choosedStudent.user_id}
                            </Typography>
                            <Table aria-label="simple table">
                                {/* <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Id</TableCell>
                                        <TableCell>Status</TableCell>
                                    </TableRow>
                                </TableHead> */}
                                <TableBody>
                                    <TableRow>
                                        <TableCell>View Items</TableCell>
                                        <TableCell>
                                            <Button
                                                color="success"
                                                style={{
                                                    backgroundColor: "green",
                                                    color: "white",
                                                    padding: "5px",
                                                    borderRadius: "3px",
                                                    margin: "10px",
                                                }}
                                            >
                                                On-Hold
                                            </Button>
                                            <Button
                                                color="success"
                                                style={{
                                                    backgroundColor: "green",
                                                    color: "white",
                                                    padding: "5px",
                                                    borderRadius: "3px",
                                                    margin: "10px",
                                                }}
                                            >
                                                Borrowed
                                            </Button>
                                            <Button
                                                color="success"
                                                style={{
                                                    backgroundColor: "green",
                                                    color: "white",
                                                    padding: "5px",
                                                    borderRadius: "3px",
                                                    margin: "10px",
                                                }}
                                            >
                                                Returned
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Actions</TableCell>
                                        <TableCell>
                                            <Button
                                                color="success"
                                                style={{
                                                    backgroundColor: "green",
                                                    color: "white",
                                                    padding: "5px",
                                                    borderRadius: "3px",
                                                    margin: "10px",
                                                }}
                                            >
                                                Lend Item
                                            </Button>
                                            <Button
                                                color="success"
                                                style={{
                                                    backgroundColor: "green",
                                                    color: "white",
                                                    padding: "5px",
                                                    borderRadius: "3px",
                                                    margin: "10px",
                                                }}
                                            >
                                                Return Item
                                            </Button>
                                            <Button
                                                color="success"
                                                style={{
                                                    backgroundColor: "green",
                                                    color: "white",
                                                    padding: "5px",
                                                    borderRadius: "3px",
                                                    margin: "10px",
                                                }}
                                            >
                                                Warn
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </>
                    )}
                </Box>
            </Modal>
        </>
    );
}

export default Users;
