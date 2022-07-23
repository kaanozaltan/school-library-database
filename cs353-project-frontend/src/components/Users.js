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
import {
    bringAllAvailableAndHoldedItemsForLend,
    bringAllReturnableItems,
    bringAllUsers,
    bringFilteredUsers,
    bringMyItems,
    bringUserWarnLibraryItems,
    lendItem,
    returnItem,
    warnUser,
} from "../store/actions/all.actions.js";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
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
        nameFilter: "",
        idFilter: "",
        userType: "ALL",
        status: "ON_HOLD",
        warnMessage:
            "Return date to return the book is due! Pleaase return it as soon as possible.",
        lendReturnDate: "2019-08-29",
        warnTitle: "Return date is due!",
    });
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const [openAssignModal, setOpenAssignModal] = React.useState(false);
    const [openUserSpecificModal, setOpenUserSpecificModal] = React.useState(
        false
    );

    const [openLendModal, setOpenLendModal] = React.useState(false);
    const [openReturnModal, setOpenReturnModal] = React.useState(false);
    const [openWarnModal, setOpenWarnModal] = React.useState(false);

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
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const currentState = useSelector((state) => {
        console.log(state);
        return state;
    });

    useEffect(() => {
        dispatch(bringAllUsers());
    }, []);

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
                    {false ? (
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
                            <ToggleButtonGroup
                                color="primary"
                                value={values.userType}
                                exclusive
                                style={{
                                    margin: "auto",
                                    textAlign: "center",
                                    paddingLeft: "30px",
                                }}
                            >
                                <ToggleButton
                                    value="ALL"
                                    style={{
                                        backgroundColor:
                                            values.userType == "ALL"
                                                ? "#9ed0ff"
                                                : "",
                                    }}
                                    onClick={() => {
                                        setValues({
                                            ...values,
                                            ["userType"]: "ALL",
                                        });
                                    }}
                                >
                                    All
                                </ToggleButton>
                                <ToggleButton
                                    value="STUDENT"
                                    style={{
                                        backgroundColor:
                                            values.userType == "STUDENT"
                                                ? "#9ed0ff"
                                                : "",
                                    }}
                                    onClick={() => {
                                        setValues({
                                            ...values,
                                            ["userType"]: "STUDENT",
                                        });
                                    }}
                                >
                                    Student
                                </ToggleButton>
                                <ToggleButton
                                    value="INSTRUCTOR"
                                    style={{
                                        backgroundColor:
                                            values.userType == "INSTRUCTOR"
                                                ? "#9ed0ff"
                                                : "",
                                    }}
                                    onClick={() => {
                                        setValues({
                                            ...values,
                                            ["userType"]: "INSTRUCTOR",
                                        });
                                    }}
                                >
                                    Instructor
                                </ToggleButton>
                            </ToggleButtonGroup>
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
                                                <TableCell>
                                                    <TextField
                                                        sx={{
                                                            m: 1,
                                                            width: "100%",
                                                        }}
                                                        id="standard-basic"
                                                        variant="standard"
                                                        value={values.idFilter}
                                                        placeholder="Search by id"
                                                        onChange={handleChange(
                                                            "idFilter"
                                                        )}
                                                        type="text"
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                    <TextField
                                                        sx={{
                                                            m: 1,
                                                            width: "100%",
                                                        }}
                                                        id="standard-basic"
                                                        variant="standard"
                                                        value={
                                                            values.nameFilter
                                                        }
                                                        placeholder="Search by last name"
                                                        onChange={handleChange(
                                                            "nameFilter"
                                                        )}
                                                        type="text"
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                    <Button
                                                        onClick={() => {
                                                            dispatch(
                                                                bringFilteredUsers(
                                                                    {
                                                                        nameFilter:
                                                                            values.nameFilter,
                                                                        idFilter:
                                                                            values.idFilter,
                                                                        userTypeFilter:
                                                                            values.userType,
                                                                    }
                                                                )
                                                            );
                                                            return null;
                                                        }}
                                                        color="success"
                                                        variant="contained"
                                                    >
                                                        Search
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>User ID</TableCell>
                                                <TableCell>Last Name</TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {currentState.all.bringAllUsers.map(
                                                (student, index) => {
                                                    return (
                                                        <>
                                                            <TableRow
                                                                key={
                                                                    student.user_id
                                                                }
                                                                sx={{
                                                                    "&:last-child td, &:last-child th": {
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
                                                                                    ["choosedStudent"]: student,
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
                                                }
                                            )}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </>
                    )}
                </Box>
            </ThemeProvider>

            <Modal
                open={openUserSpecificModal}
                onClose={() => {
                    setOpenUserSpecificModal(false);
                }}
                xs={{ zIndex: "100000" }}
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
                            <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h2"
                            >
                                {values.status}
                            </Typography>
                            {currentState.all.myLibraryItems.length == 0 ? (
                                <>
                                    <Typography
                                        id="modal-modal-title"
                                        variant="h6"
                                        component="h2"
                                    >
                                        No items
                                        {/* <Box
                                            sx={{
                                                display: "flex",
                                                textAlign: "center",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                margin: "auto",
                                            }}
                                        >
                                            <CircularProgress
                                                xs={{ textAlign: "center" }}
                                            />
                                        </Box> */}
                                    </Typography>
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
                                                {values.status == "ON_HOLD" ? (
                                                    <>
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell>
                                                                    Title
                                                                </TableCell>
                                                                <TableCell>
                                                                    Authors
                                                                </TableCell>
                                                                <TableCell>
                                                                    Publish Year
                                                                </TableCell>
                                                                <TableCell>
                                                                    Till
                                                                </TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            {currentState.all.myLibraryItems.map(
                                                                (
                                                                    libraryItem,
                                                                    index
                                                                ) => {
                                                                    // if (
                                                                    //     libraryItem.status !=
                                                                    //     "ON_HOLD"
                                                                    // )
                                                                    //     return;
                                                                    return (
                                                                        <>
                                                                            <TableRow
                                                                                key={
                                                                                    libraryItem.catalog_id
                                                                                }
                                                                                sx={{
                                                                                    "&:last-child td, &:last-child th": {
                                                                                        border: 0,
                                                                                    },
                                                                                    minHeight:
                                                                                        "100px",
                                                                                }}
                                                                            >
                                                                                <TableCell>
                                                                                    {
                                                                                        libraryItem.title
                                                                                    }
                                                                                </TableCell>
                                                                                <TableCell>
                                                                                    {
                                                                                        libraryItem.authors
                                                                                    }
                                                                                </TableCell>
                                                                                <TableCell>
                                                                                    {
                                                                                        libraryItem.publish_year
                                                                                    }
                                                                                </TableCell>
                                                                                <TableCell
                                                                                    xs={{
                                                                                        whiteSpace:
                                                                                            "nowrap",
                                                                                    }}
                                                                                >
                                                                                    {"date" in
                                                                                        libraryItem &&
                                                                                        libraryItem.date.substring(
                                                                                            0,
                                                                                            10
                                                                                        )}
                                                                                </TableCell>
                                                                            </TableRow>
                                                                        </>
                                                                    );
                                                                }
                                                            )}
                                                        </TableBody>
                                                    </>
                                                ) : (
                                                    <></>
                                                )}
                                                {values.status == "BORROWED" ? (
                                                    <>
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell>
                                                                    Title
                                                                </TableCell>
                                                                <TableCell>
                                                                    Authors
                                                                </TableCell>
                                                                <TableCell>
                                                                    Publish Year
                                                                </TableCell>
                                                                <TableCell>
                                                                    Type
                                                                </TableCell>
                                                                <TableCell>
                                                                    Return Date
                                                                </TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            {currentState.all.myLibraryItems.map(
                                                                (
                                                                    libraryItem,
                                                                    index
                                                                ) => {
                                                                    // if (
                                                                    //     libraryItem.status !=
                                                                    //     "BORROWED"
                                                                    // )
                                                                    //     return;
                                                                    return (
                                                                        <>
                                                                            <TableRow
                                                                                key={
                                                                                    libraryItem.catalog_id
                                                                                }
                                                                                sx={{
                                                                                    "&:last-child td, &:last-child th": {
                                                                                        border: 0,
                                                                                    },
                                                                                    minHeight:
                                                                                        "100px",
                                                                                }}
                                                                            >
                                                                                <TableCell>
                                                                                    {
                                                                                        libraryItem.title
                                                                                    }
                                                                                </TableCell>
                                                                                <TableCell>
                                                                                    {
                                                                                        libraryItem.authors
                                                                                    }
                                                                                </TableCell>
                                                                                <TableCell>
                                                                                    {
                                                                                        libraryItem.publish_year
                                                                                    }
                                                                                </TableCell>
                                                                                <TableCell>
                                                                                    {
                                                                                        libraryItem.type
                                                                                    }
                                                                                </TableCell>
                                                                                <TableCell>
                                                                                    {
                                                                                        libraryItem.return_date
                                                                                    }
                                                                                </TableCell>
                                                                            </TableRow>
                                                                        </>
                                                                    );
                                                                }
                                                            )}
                                                        </TableBody>
                                                    </>
                                                ) : (
                                                    <></>
                                                )}
                                                {values.status == "RETURNED" ? (
                                                    <>
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell>
                                                                    Title
                                                                </TableCell>
                                                                <TableCell>
                                                                    Authors
                                                                </TableCell>
                                                                <TableCell>
                                                                    Publish Year
                                                                </TableCell>
                                                                <TableCell>
                                                                    Type
                                                                </TableCell>
                                                                <TableCell>
                                                                    Return Date
                                                                </TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            {currentState.all.myLibraryItems.map(
                                                                (
                                                                    libraryItem,
                                                                    index
                                                                ) => {
                                                                    // if (
                                                                    //     libraryItem.status !=
                                                                    //     "RETURNED"
                                                                    // )
                                                                    //     return;
                                                                    return (
                                                                        <>
                                                                            <TableRow
                                                                                key={
                                                                                    libraryItem.catalog_id
                                                                                }
                                                                                sx={{
                                                                                    "&:last-child td, &:last-child th": {
                                                                                        border: 0,
                                                                                    },
                                                                                    minHeight:
                                                                                        "100px",
                                                                                }}
                                                                            >
                                                                                <TableCell>
                                                                                    {
                                                                                        libraryItem.title
                                                                                    }
                                                                                </TableCell>
                                                                                <TableCell>
                                                                                    {
                                                                                        libraryItem.authors
                                                                                    }
                                                                                </TableCell>
                                                                                <TableCell>
                                                                                    {
                                                                                        libraryItem.publish_year
                                                                                    }
                                                                                </TableCell>
                                                                                <TableCell>
                                                                                    {
                                                                                        libraryItem.type
                                                                                    }
                                                                                </TableCell>
                                                                                <TableCell>
                                                                                    {
                                                                                        libraryItem.return_date
                                                                                    }
                                                                                </TableCell>
                                                                            </TableRow>
                                                                        </>
                                                                    );
                                                                }
                                                            )}
                                                        </TableBody>
                                                    </>
                                                ) : (
                                                    <></>
                                                )}
                                            </Table>
                                        </TableContainer>
                                    </Box>
                                </>
                            )}
                        </>
                    )}
                </Box>
            </Modal>

            <Modal
                open={openLendModal}
                onClose={() => {
                    setOpenLendModal(false);
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
                                Lend item to user{" "}
                                {values.choosedStudent.user_id}
                            </Typography>
                            <TextField
                                sx={{ m: 1, width: "100%" }}
                                id="standard-basic"
                                label="Set Return Date"
                                variant="standard"
                                value={values.lendReturnDate}
                                onChange={handleChange("lendReturnDate")}
                                placeholder="yyyy-mm-dd"
                                type="text"
                            />
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Title</TableCell>
                                        <TableCell>Authors</TableCell>
                                        <TableCell>Publish Year</TableCell>
                                        <TableCell>Type</TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {currentState.all.lendItems.map(
                                        (libraryItem, index) => {
                                            // if (
                                            //     libraryItem.status !=
                                            //     "BORROWED"
                                            // )
                                            //     return;
                                            return (
                                                <>
                                                    <TableRow
                                                        key={
                                                            libraryItem.catalog_id
                                                        }
                                                        sx={{
                                                            "&:last-child td, &:last-child th": {
                                                                border: 0,
                                                            },
                                                            minHeight: "100px",
                                                        }}
                                                    >
                                                        <TableCell>
                                                            {libraryItem.title}
                                                        </TableCell>
                                                        <TableCell>
                                                            {
                                                                libraryItem.authors
                                                            }
                                                        </TableCell>
                                                        <TableCell>
                                                            {
                                                                libraryItem.publish_year
                                                            }
                                                        </TableCell>
                                                        <TableCell>
                                                            {libraryItem.type}
                                                        </TableCell>
                                                        <TableCell>
                                                            <Button
                                                                color="success"
                                                                onClick={() => {
                                                                    let data = {
                                                                        catalog_id:
                                                                            libraryItem.catalog_id,
                                                                        student_user_id:
                                                                            values
                                                                                .choosedStudent
                                                                                .user_id,
                                                                        librarian_user_id:
                                                                            currentState
                                                                                .login
                                                                                .user
                                                                                .user_id,
                                                                    };
                                                                    dispatch(
                                                                        lendItem(
                                                                            data
                                                                        )
                                                                    );
                                                                }}
                                                                variant="contained"
                                                            >
                                                                Lend
                                                            </Button>
                                                        </TableCell>
                                                    </TableRow>
                                                </>
                                            );
                                        }
                                    )}
                                </TableBody>
                            </Table>
                        </>
                    )}
                </Box>
            </Modal>
            <Modal
                open={openReturnModal}
                onClose={() => {
                    setOpenReturnModal(false);
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
                            <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h2"
                            >
                                Return Item
                            </Typography>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Title</TableCell>
                                        <TableCell>Authors</TableCell>
                                        <TableCell>Publish Year</TableCell>
                                        <TableCell>Type</TableCell>
                                        {/* <TableCell>Return Date</TableCell> */}
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {currentState.all.returnableItems.map(
                                        (libraryItem, index) => {
                                            // if (
                                            //     libraryItem.status !=
                                            //     "BORROWED"
                                            // )
                                            //     return;
                                            return (
                                                <>
                                                    <TableRow
                                                        key={
                                                            libraryItem.catalog_id
                                                        }
                                                        sx={{
                                                            "&:last-child td, &:last-child th": {
                                                                border: 0,
                                                            },
                                                            minHeight: "100px",
                                                        }}
                                                    >
                                                        <TableCell>
                                                            {libraryItem.title}
                                                        </TableCell>
                                                        <TableCell>
                                                            {
                                                                libraryItem.authors
                                                            }
                                                        </TableCell>
                                                        <TableCell>
                                                            {
                                                                libraryItem.publish_year
                                                            }
                                                        </TableCell>
                                                        <TableCell>
                                                            {libraryItem.type}
                                                        </TableCell>
                                                        {/* <TableCell>
                                                            {
                                                                libraryItem.return_date
                                                            }
                                                        </TableCell> */}
                                                        <TableCell>
                                                            <Button
                                                                color="primary"
                                                                variant="contained"
                                                                onClick={() => {
                                                                    let data = {
                                                                        catalog_id:
                                                                            libraryItem.catalog_id,
                                                                        student_user_id:
                                                                            values
                                                                                .choosedStudent
                                                                                .user_id,
                                                                        librarian_user_id:
                                                                            currentState
                                                                                .login
                                                                                .user
                                                                                .user_id,
                                                                    };
                                                                    dispatch(
                                                                        returnItem(
                                                                            data
                                                                        )
                                                                    );
                                                                }}
                                                            >
                                                                Return
                                                            </Button>
                                                        </TableCell>
                                                    </TableRow>
                                                </>
                                            );
                                        }
                                    )}
                                </TableBody>
                            </Table>
                        </>
                    )}
                </Box>
            </Modal>
            <Modal
                open={openWarnModal}
                onClose={() => {
                    setOpenWarnModal(false);
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
                            <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h2"
                            >
                                Warn
                            </Typography>
                            {/* <TextField
                                sx={{
                                    m: 1,
                                    width: "100%",
                                }}
                                id="standard-basic"
                                label="Title"
                                variant="standard"
                                value={values.warnTitle}
                                placeholder="Warn Message"
                                onChange={handleChange("warnTitle")}
                                type="text"
                            /> */}
                            <TextField
                                sx={{
                                    m: 1,
                                    width: "100%",
                                }}
                                id="standard-basic"
                                label="Message"
                                variant="standard"
                                value={values.warnMessage}
                                placeholder="Warn Message"
                                onChange={handleChange("warnMessage")}
                                type="text"
                            />
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Title</TableCell>
                                        <TableCell>Authors</TableCell>
                                        <TableCell>Publish Year</TableCell>
                                        <TableCell>Type</TableCell>
                                        <TableCell>Return Date</TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {currentState.all.myLibraryItems.map(
                                        (libraryItem, index) => {
                                            // if (
                                            //     libraryItem.status !=
                                            //     "BORROWED"
                                            // )
                                            //     return;
                                            return (
                                                <>
                                                    <TableRow
                                                        key={
                                                            libraryItem.catalog_id
                                                        }
                                                        sx={{
                                                            "&:last-child td, &:last-child th": {
                                                                border: 0,
                                                            },
                                                            minHeight: "100px",
                                                        }}
                                                    >
                                                        <TableCell>
                                                            {libraryItem.title}
                                                        </TableCell>
                                                        <TableCell>
                                                            {
                                                                libraryItem.authors
                                                            }
                                                        </TableCell>
                                                        <TableCell>
                                                            {
                                                                libraryItem.publish_year
                                                            }
                                                        </TableCell>
                                                        <TableCell>
                                                            {libraryItem.type}
                                                        </TableCell>
                                                        <TableCell>
                                                            {
                                                                libraryItem.return_date
                                                            }
                                                        </TableCell>
                                                        <TableCell>
                                                            <Button
                                                                color="error"
                                                                onClick={() => {
                                                                    let data = {
                                                                        librarian_user_id:
                                                                            currentState
                                                                                .login
                                                                                .user
                                                                                .user_id,
                                                                        student_user_id:
                                                                            values
                                                                                .choosedStudent
                                                                                .user_id,
                                                                        description:
                                                                            values.warnMessage,
                                                                        catalog_id:
                                                                            libraryItem.catalog_id,
                                                                    };
                                                                    dispatch(
                                                                        warnUser(
                                                                            data
                                                                        )
                                                                    );
                                                                }}
                                                                variant="contained"
                                                            >
                                                                Warn
                                                            </Button>
                                                        </TableCell>
                                                    </TableRow>
                                                </>
                                            );
                                        }
                                    )}
                                </TableBody>
                            </Table>
                        </>
                    )}
                </Box>
            </Modal>

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
                                                onClick={() => {
                                                    setValues({
                                                        ...values,
                                                        status: "ON_HOLD",
                                                    });
                                                    setOpenUserSpecificModal(
                                                        true
                                                    );
                                                    let data = {
                                                        user_id:
                                                            values
                                                                .choosedStudent
                                                                .user_id,
                                                        status: "ON_HOLD",
                                                    };
                                                    dispatch(
                                                        bringMyItems(data)
                                                    );
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
                                                onClick={() => {
                                                    setValues({
                                                        ...values,
                                                        status: "BORROWED",
                                                    });
                                                    setOpenUserSpecificModal(
                                                        true
                                                    );
                                                    let data = {
                                                        user_id:
                                                            values
                                                                .choosedStudent
                                                                .user_id,
                                                        status: "BORROWED",
                                                    };
                                                    dispatch(
                                                        bringMyItems(data)
                                                    );
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
                                                onClick={() => {
                                                    setValues({
                                                        ...values,
                                                        status: "RETURNED",
                                                    });
                                                    setOpenUserSpecificModal(
                                                        true
                                                    );
                                                    let data = {
                                                        user_id:
                                                            values
                                                                .choosedStudent
                                                                .user_id,
                                                        status: "RETURNED",
                                                    };
                                                    dispatch(
                                                        bringMyItems(data)
                                                    );
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
                                                onClick={() => {
                                                    setOpenLendModal(true);
                                                    let data = {};
                                                    data.user_id =
                                                        values.choosedStudent.user_id;
                                                    dispatch(
                                                        bringAllAvailableAndHoldedItemsForLend(
                                                            data
                                                        )
                                                    );
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
                                                onClick={() => {
                                                    let data = {
                                                        student_user_id:
                                                            values
                                                                .choosedStudent
                                                                .user_id,
                                                    };
                                                    dispatch(
                                                        bringAllReturnableItems(
                                                            data
                                                        )
                                                    );
                                                    setOpenReturnModal(true);
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
                                                onClick={() => {
                                                    let data = {};
                                                    data.user_id =
                                                        values.choosedStudent.user_id;
                                                    data.status = "BORROWED";
                                                    console.log(data);
                                                    dispatch(
                                                        bringMyItems(data)
                                                    );
                                                    setOpenWarnModal(true);
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
