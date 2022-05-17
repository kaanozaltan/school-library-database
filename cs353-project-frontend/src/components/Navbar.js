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
import * as Constants from "../constants/constants";
import MenuItem from "@mui/material/MenuItem";

const theme = createTheme();
const librarianPages = [
    { name: "Library Items", link: "libraryItems" },
    { name: "Users", link: "users" },
    { name: "Register A New Item", link: "registerANewItem" },
    { name: "Register A New User", link: "registerANewUser" },
];
const studentPages = [
    { name: "Home", link: "home" },
    { name: "Library Items", link: "libraryItems" },
    { name: "Assigned Items", link: "assignedItems" },
    { name: "My Items", link: "myItems" },
    { name: "Warnings", link: "warnings" },
];
const instructorPages = [
    { name: "Home", link: "home" },
    { name: "Library Items", link: "libraryItems" },
    { name: "My Items", link: "myItems" },
    { name: "Warnings", link: "warnings" },
];
// const settings = [
//     { name: "Profile", link: "profile" },
//     { name: "Logout", link: "login" },
// ];

function Navbar() {
    useEffect(() => {
        console.log(currentState.login.user, "USERR");
        if (Object.keys(currentState.login.user).length == 0) {
            let user = JSON.parse(localStorage.getItem("user"));
            console.log(JSON.parse(localStorage.getItem("user")), "TESTT");
            if (JSON.parse(localStorage.getItem("user")) == null) {
                console.log("TEST");
                navigate("/login");
                return;
            }

            dispatch({
                type: "SET_USER",
                user: user,
            });
        }
    }, []);
    const [values, setValues] = useState({
        email: "",
        password: "",
        name: "",
        cell_phone: "",
        user_id: "",
        showPassword: false,
    });
    let pages = [];
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        //dispatch(userRegister(user, navigate));
    };
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const currentState = useSelector((state) => {
        console.log(state);
        if ("user_type" in state.login.user) {
            if (state.login.user.user_type == "INSTRUCTOR") {
                pages = instructorPages;
                // setValues({ ...values, pages: instructorPages });
            } else if (state.login.user.user_type == "LIBRARIAN") {
                pages = librarianPages;
                // setValues({ ...values, pages: librarianPages });
            } else if (state.login.user.user_type == "STUDENT") {
                pages = studentPages;
                // setValues({ ...values, pages: studentPages });
            }
        }

        return state;
    });

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    useEffect(() => {
        if (currentState.login.user == null) {
            // navigate("/");
        }
    }, [currentState.login]);

    return (
        <>
            {/* {currentState.login.user == null ? ( */}

            {false ? (
                <></>
            ) : (
                <ThemeProvider theme={theme}>
                    <AppBar position="static">
                        <h1
                            style={{
                                textAlign: "center",
                                padding: "10px",
                                borderBottom: "2px solid lightblue",
                            }}
                        >
                            Bilkent Library
                        </h1>
                        {Object.keys(currentState.login.user).length != 0 && (
                            <Container maxWidth="xl">
                                <Toolbar disableGutters>
                                    <Box
                                        sx={{
                                            flexGrow: 1,
                                            display: { xs: "flex", md: "none" },
                                        }}
                                        style={{ textAlign: "center" }}
                                    >
                                        <IconButton
                                            size="large"
                                            aria-label="account of current user"
                                            aria-controls="menu-appbar"
                                            aria-haspopup="true"
                                            onClick={handleOpenNavMenu}
                                            color="inherit"
                                        >
                                            <MenuIcon />
                                        </IconButton>
                                        <Menu
                                            id="menu-appbar"
                                            anchorEl={anchorElNav}
                                            anchorOrigin={{
                                                vertical: "bottom",
                                                horizontal: "left",
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: "top",
                                                horizontal: "left",
                                            }}
                                            open={Boolean(anchorElNav)}
                                            onClose={handleCloseNavMenu}
                                            sx={{
                                                display: {
                                                    xs: "block",
                                                    md: "none",
                                                },
                                            }}
                                        >
                                            {pages.map((page) => (
                                                <MenuItem
                                                    key={page.name}
                                                    onClick={handleCloseNavMenu}
                                                >
                                                    <Link
                                                        to={"/" + page.link}
                                                        style={{
                                                            textDecoration:
                                                                "none",
                                                        }}
                                                    >
                                                        <Typography textAlign="center">
                                                            {page.name}
                                                        </Typography>
                                                    </Link>
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        noWrap
                                        component="div"
                                        sx={{
                                            flexGrow: 1,
                                            display: { xs: "flex", md: "none" },
                                        }}
                                    >
                                        ""
                                    </Typography>
                                    <Box
                                        sx={{
                                            flexGrow: 1,
                                            display: { xs: "none", md: "flex" },
                                        }}
                                    >
                                        {pages.map((page) => (
                                            <Button
                                                key={page.name}
                                                onClick={handleCloseNavMenu}
                                                sx={{
                                                    my: 2,
                                                    color: "white",
                                                    display: "block",
                                                }}
                                            >
                                                <Link
                                                    to={"/" + page.link}
                                                    style={{
                                                        color: "white",
                                                        textDecoration: "none",
                                                    }}
                                                >
                                                    {page.name}
                                                </Link>
                                            </Button>
                                        ))}
                                    </Box>

                                    {Object.keys(currentState.login.user)
                                        .length != 0 && (
                                        <Box sx={{ flexGrow: 0 }}>
                                            <Tooltip title="Open settings">
                                                <IconButton
                                                    onClick={handleOpenUserMenu}
                                                    sx={{ p: 0 }}
                                                >
                                                    <Avatar
                                                        alt="Remy Sharp"
                                                        src="/static/images/avatar/2.jpg"
                                                    />
                                                </IconButton>
                                            </Tooltip>
                                            <Menu
                                                sx={{ mt: "45px" }}
                                                id="menu-appbar"
                                                anchorEl={anchorElUser}
                                                anchorOrigin={{
                                                    vertical: "top",
                                                    horizontal: "right",
                                                }}
                                                keepMounted
                                                transformOrigin={{
                                                    vertical: "top",
                                                    horizontal: "right",
                                                }}
                                                open={Boolean(anchorElUser)}
                                                onClose={handleCloseUserMenu}
                                            >
                                                <MenuItem
                                                    onClick={() => {
                                                        handleCloseUserMenu();
                                                        localStorage.setItem(
                                                            "user",
                                                            JSON.stringify({})
                                                        );
                                                        navigate("/login");
                                                        dispatch({
                                                            type: "SET_USER",
                                                            user: {},
                                                        });
                                                    }}
                                                >
                                                    <Typography textAlign="center">
                                                        Logout
                                                    </Typography>
                                                </MenuItem>
                                            </Menu>
                                        </Box>
                                    )}
                                </Toolbar>
                            </Container>
                        )}
                    </AppBar>
                </ThemeProvider>
            )}
        </>
    );
}

export default Navbar;
