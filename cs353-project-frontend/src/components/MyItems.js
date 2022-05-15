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

function AssignedItems() {
    const [values, setValues] = useState({
        seaerchText: "",
        assignStudentSearchText: "",
        choosedLibraryItemForAssignment: {},
        status: "ON_HOLD",
    });
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const [openAssignModal, setOpenAssignModal] = React.useState(false);

    const books = [
        {
            catalog_id: 1,
            title: "Beyaz Zamciklar Ulkesinde",
            authors: [
                {
                    catalog_id: 1,
                    author: "Kaan Ozaltan",
                },
            ],
            call_no: "12312312",
            publish_date: "02/02/2019",
            publish_year: 2019,
            is_available: false,
            language: "English",
            publisher: "TBS Yayincilik",
            description: "A very lovely book",
            type: "Book",
            status: "ON_HOLD",
            till: "29/05/2022",
        },
        {
            catalog_id: 2,
            title: "Selamun aleykum",
            authors: [
                {
                    catalog_id: 2,
                    author: "Hiassam",
                },
                {
                    catalog_id: 2,
                    author: "Namik Kemal",
                },
            ],
            call_no: "12312322",
            publish_date: "02/03/2019",
            publish_year: 2019,
            is_available: true,
            language: "English",
            publisher: "TBS Yayincilik",
            description: "A very lovely book the second",
            assignedBy: "Cancak Russo",
            type: "Book",
            status: "ON_HOLD",
            till: "29/05/2022",
        },
        {
            catalog_id: 1,
            title: "Beyaz Zamciklar Ulkesinde",
            authors: [
                {
                    catalog_id: 1,
                    author: "Kaan Ozaltan",
                },
            ],
            call_no: "12312312",
            publish_date: "02/02/2019",
            publish_year: 2019,
            is_available: false,
            language: "English",
            publisher: "TBS Yayincilik",
            description: "A very lovely book",
            type: "Book",
            assignedBy: "Coker A.",
            status: "BORROWED",
            return_date: "27/06/2022",
        },
        {
            catalog_id: 1,
            title: "Beyaz Zamciklar Ulkesinde",
            authors: [
                {
                    catalog_id: 1,
                    author: "Kaan Ozaltan",
                },
            ],
            call_no: "12312312",
            publish_date: "02/02/2019",
            publish_year: 2019,
            is_available: false,
            language: "English",
            publisher: "TBS Yayincilik",
            description: "A very lovely book",
            type: "Book",
            assignedBy: "Coker A.",
            status: "RETURNED",
            return_date: "13/05/2022",
        },
    ];

    const students = [
        { name: "Kaan", id: "123123" },
        { name: "Servet", id: "1231231231" },
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
                    {/* <SearchBar
                        value={values.seaerchText}
                        onChange={(newValue) => null}
                        onRequestSearch={() => {
                            return null;
                        }}
                    /> */}
                    <ToggleButtonGroup
                        color="primary"
                        value={values.status}
                        exclusive
                        style={{ margin: "auto", textAlign: "center" }}
                    >
                        <ToggleButton
                            value="ON_HOLD"
                            style={{
                                backgroundColor:
                                    values.status == "ON_HOLD" ? "#9ed0ff" : "",
                            }}
                            onClick={() => {
                                setValues({
                                    ...values,
                                    ["status"]: "ON_HOLD",
                                });
                            }}
                        >
                            On-Hold
                        </ToggleButton>
                        <ToggleButton
                            value="BORROWED"
                            style={{
                                backgroundColor:
                                    values.status == "BORROWED"
                                        ? "#9ed0ff"
                                        : "",
                            }}
                            onClick={() => {
                                setValues({
                                    ...values,
                                    ["status"]: "BORROWED",
                                });
                            }}
                        >
                            Borrowed
                        </ToggleButton>
                        <ToggleButton
                            value="RETURNED"
                            style={{
                                backgroundColor:
                                    values.status == "RETURNED"
                                        ? "#9ed0ff"
                                        : "",
                            }}
                            onClick={() => {
                                setValues({
                                    ...values,
                                    ["status"]: "RETURNED",
                                });
                            }}
                        >
                            Returned
                        </ToggleButton>
                    </ToggleButtonGroup>

                    {books.length == -1 ? (
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
                                        {values.status == "ON_HOLD" ? (
                                            <>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>
                                                            Title
                                                        </TableCell>
                                                        <TableCell>
                                                            Till
                                                        </TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {books.map(
                                                        (
                                                            libraryItem,
                                                            index
                                                        ) => {
                                                            if (
                                                                libraryItem.status !=
                                                                "ON_HOLD"
                                                            )
                                                                return;
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
                                                                            {libraryItem.title +
                                                                                " " +
                                                                                libraryItem
                                                                                    .authors[0]
                                                                                    .author +
                                                                                " published at " +
                                                                                libraryItem.publish_year}
                                                                        </TableCell>
                                                                        <TableCell>
                                                                            {
                                                                                libraryItem.till
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
                                        {values.status == "BORROWED" ? (
                                            <>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>
                                                            Title
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
                                                    {books.map(
                                                        (
                                                            libraryItem,
                                                            index
                                                        ) => {
                                                            if (
                                                                libraryItem.status !=
                                                                "BORROWED"
                                                            )
                                                                return;
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
                                                                            {libraryItem.title +
                                                                                " " +
                                                                                libraryItem
                                                                                    .authors[0]
                                                                                    .author +
                                                                                " published at " +
                                                                                libraryItem.publish_year}
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
                                                            Type
                                                        </TableCell>
                                                        <TableCell>
                                                            Return Date
                                                        </TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {books.map(
                                                        (
                                                            libraryItem,
                                                            index
                                                        ) => {
                                                            if (
                                                                libraryItem.status !=
                                                                "RETURNED"
                                                            )
                                                                return;
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
                                                                            {libraryItem.title +
                                                                                " " +
                                                                                libraryItem
                                                                                    .authors[0]
                                                                                    .author +
                                                                                " published at " +
                                                                                libraryItem.publish_year}
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
                </Box>
            </ThemeProvider>
        </>
    );
}

export default AssignedItems;
