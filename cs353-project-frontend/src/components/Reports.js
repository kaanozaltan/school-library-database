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
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// import SearchBar from "material-ui-search-bar";
import Modal from "@mui/material/Modal";
import { bringAllCourses, bringMyItems } from "../store/actions/all.actions";
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
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Reports() {
    const [values, setValues] = useState({
        status: "ON_HOLD",
    });
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const [openAssignModal, setOpenAssignModal] = React.useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        // console.log(values);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        //dispatch(userRegister(user, navigate));
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const currentState = useSelector((state) => {
        console.log(state);
        return state;
    });

    useEffect(() => {
        if ("user_id" in currentState.login.user) {
            console.log(values.status);
            let data = values;
            data["user_id"] = currentState.login.user.user_id;
            data["user_type"] = currentState.login.user.user_type;
            dispatch(bringAllCourses(data));
        }
    }, [values.status, currentState.login.user]);

    return (
        <>
            <ThemeProvider theme={theme}>
                <Box
                    xs={{ mt: 10 }}
                    style={{
                        margin: "auto",
                        marginTop: "50px",
                        maxWidth: "850px",
                    }}
                >
                    <>
                        <h1>Reports</h1>
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
                                <h1>
                                    Total Number of Library Items For Each Genre
                                </h1>
                                <Table aria-label="simple table">
                                    <>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>
                                                    Genre Name
                                                </TableCell>
                                                <TableCell>
                                                    Item count
                                                </TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow
                                                sx={{
                                                    "&:last-child td, &:last-child th": {
                                                        border: 0,
                                                    },
                                                    minHeight: "100px",
                                                }}
                                            >
                                                <TableCell>Horror</TableCell>
                                                <TableCell>10</TableCell>
                                            </TableRow>
                                            <TableRow
                                                sx={{
                                                    "&:last-child td, &:last-child th": {
                                                        border: 0,
                                                    },
                                                    minHeight: "100px",
                                                }}
                                            >
                                                <TableCell>Fiction</TableCell>
                                                <TableCell>8</TableCell>
                                            </TableRow>
                                            <TableRow
                                                sx={{
                                                    "&:last-child td, &:last-child th": {
                                                        border: 0,
                                                    },
                                                    minHeight: "100px",
                                                }}
                                            >
                                                <TableCell>Dram</TableCell>
                                                <TableCell>3</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </>
                                </Table>

                                <br />

                                <h1>Borrow Counts of Each Library Item</h1>
                                <Table aria-label="simple table">
                                    <>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Title</TableCell>
                                                <TableCell>
                                                    Catalog ID
                                                </TableCell>
                                                <TableCell>
                                                    Total Borrow Count
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow
                                                sx={{
                                                    "&:last-child td, &:last-child th": {
                                                        border: 0,
                                                    },
                                                    minHeight: "100px",
                                                }}
                                            >
                                                <TableCell>
                                                    Lord of the Rings
                                                </TableCell>
                                                <TableCell>31</TableCell>
                                                <TableCell>2</TableCell>
                                            </TableRow>
                                            <TableRow
                                                sx={{
                                                    "&:last-child td, &:last-child th": {
                                                        border: 0,
                                                    },
                                                    minHeight: "100px",
                                                }}
                                            >
                                                <TableCell>AI</TableCell>
                                                <TableCell>1003</TableCell>
                                                <TableCell>8</TableCell>
                                            </TableRow>
                                            <TableRow
                                                sx={{
                                                    "&:last-child td, &:last-child th": {
                                                        border: 0,
                                                    },
                                                    minHeight: "100px",
                                                }}
                                            >
                                                <TableCell>
                                                    Martin Eden
                                                </TableCell>
                                                <TableCell>32</TableCell>
                                                <TableCell>2</TableCell>
                                            </TableRow>
                                            <TableRow
                                                sx={{
                                                    "&:last-child td, &:last-child th": {
                                                        border: 0,
                                                    },
                                                    minHeight: "100px",
                                                }}
                                            >
                                                <TableCell>Chess</TableCell>
                                                <TableCell>33</TableCell>
                                                <TableCell>100</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </>
                                </Table>
                            </TableContainer>
                        </Box>
                    </>
                </Box>
            </ThemeProvider>
        </>
    );
}

export default Reports;
