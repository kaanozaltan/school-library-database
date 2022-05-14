import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import { userRegister } from "../store/actions/login.actions.js";
import ReactPhoneInput from "react-phone-input-material-ui";
import { useNavigate } from "react-router-dom";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import FormGroup from "@mui/material/FormGroup";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Autocomplete from "@mui/material/Autocomplete";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";

const theme = createTheme();

function RegisterANewUser() {
    // const [values, setValues] = useState({
    //     email: "",
    //     password: "",
    //     name: "",
    //     cell_phone: "",
    //     user_id: "",
    //     showPassword: false,
    // });
    const [values, setValues] = useState({
        email: "servet.gulnaroglu@ug.bilkent.edu.tr",
        password: "123123123",
        cell_phone: "905051461111",
        user_id: "21902473",
        showPassword: false,
        userType: "STUDENT",
        last_name: "Gulnaroglu",
        first_name: "Servet",
        department: "CS",
        office_number: "EA-506",
        user_name: "servetg",
        is_graduate: false,
    });
    const departments = [{ label: "CS" }, { label: "EE" }, { label: "ME" }];

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //const data = new FormData(event.currentTarget);
        // if (values.cell_phone.length != 12) {
        //     alert("Phone number is not valid");
        //     return;
        // }
        if (values.department === "" && values.userType == "STUDENT") {
            alert("Choose a department");
        }
        const user = values;
        console.log(user);
        dispatch(userRegister(user, navigate));
    };
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    return (
        <ThemeProvider theme={theme}>
            {/* <Link to="/login" variant="body2">
                <Button variant="contained" sx={{ mt: 4, ml: 4, mb: 2 }}>
                    Back to Login
                </Button>
            </Link> */}
            <Container component="main" maxWidth="100%">
                <CssBaseline />

                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        maxWidth: "xs",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        {/* <LockOutlinedIcon /> */}
                        <PersonAddIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Register A User
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{
                            mt: 1,
                            maxWidth: "300px",
                            display: "inline-block",
                        }}
                    >
                        <h5 style={{ textAlign: "center", marginTop: "20px" }}>
                            {" "}
                            Select user type
                        </h5>
                        <ToggleButtonGroup
                            color="primary"
                            value={values.userType}
                            exclusive
                            style={{ margin: "auto", textAlign: "center" }}
                        >
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
                        {values.userType == "INSTRUCTOR" ? (
                            <>
                                <TextField
                                    sx={{ m: 1, width: "100%" }}
                                    id="standard-basic"
                                    label="Email"
                                    variant="standard"
                                    value={values.email}
                                    onChange={handleChange("email")}
                                    type="email"
                                />
                                <TextField
                                    sx={{ m: 1, width: "100%" }}
                                    id="standard-basic"
                                    label="Bilkent ID"
                                    variant="standard"
                                    value={values.user_id}
                                    onChange={handleChange("user_id")}
                                    type="text"
                                />
                                <TextField
                                    sx={{ m: 1, width: "100%" }}
                                    id="standard-basic"
                                    label="First name"
                                    variant="standard"
                                    value={values.first_name}
                                    onChange={handleChange("name")}
                                    type="text"
                                />
                                <TextField
                                    sx={{ m: 1, width: "100%" }}
                                    id="standard-basic"
                                    label="Last name"
                                    variant="standard"
                                    value={values.last_name}
                                    onChange={handleChange("name")}
                                    type="text"
                                />
                                <TextField
                                    sx={{ m: 1, width: "100%" }}
                                    id="standard-basic"
                                    label="User name"
                                    variant="standard"
                                    value={values.user_name}
                                    onChange={handleChange("name")}
                                    type="text"
                                />
                                <TextField
                                    sx={{ m: 1, width: "100%" }}
                                    id="standard-basic"
                                    label="Phone Number"
                                    variant="standard"
                                    value={values.cell_phone}
                                    onChange={handleChange("cell_phone")}
                                    placeholder="05_________"
                                    type="tel"
                                />
                                <TextField
                                    sx={{ m: 1, width: "100%" }}
                                    id="standard-basic"
                                    label="Office Number"
                                    variant="standard"
                                    value={values.office_number}
                                    onChange={handleChange("office_number")}
                                    placeholder=""
                                    type="text"
                                />{" "}
                                <TextField
                                    sx={{ m: 1, width: "100%" }}
                                    id="standard-basic"
                                    label="Department"
                                    variant="standard"
                                    value={values.department}
                                    onChange={handleChange("department")}
                                    placeholder="CS"
                                    type="text"
                                />
                            </>
                        ) : (
                            <>
                                <TextField
                                    sx={{ m: 1, width: "100%" }}
                                    id="standard-basic"
                                    label="Email"
                                    variant="standard"
                                    value={values.email}
                                    onChange={handleChange("email")}
                                    type="email"
                                />
                                <TextField
                                    sx={{ m: 1, width: "100%" }}
                                    id="standard-basic"
                                    label="Bilkent ID"
                                    variant="standard"
                                    value={values.user_id}
                                    onChange={handleChange("user_id")}
                                    type="text"
                                />
                                <TextField
                                    sx={{ m: 1, width: "100%" }}
                                    id="standard-basic"
                                    label="First name"
                                    variant="standard"
                                    value={values.first_name}
                                    onChange={handleChange("name")}
                                    type="text"
                                />
                                <TextField
                                    sx={{ m: 1, width: "100%" }}
                                    id="standard-basic"
                                    label="Last name"
                                    variant="standard"
                                    value={values.last_name}
                                    onChange={handleChange("name")}
                                    type="text"
                                />
                                <TextField
                                    sx={{ m: 1, width: "100%" }}
                                    id="standard-basic"
                                    label="User name"
                                    variant="standard"
                                    value={values.user_name}
                                    onChange={handleChange("name")}
                                    type="text"
                                />
                                <TextField
                                    sx={{ m: 1, width: "100%" }}
                                    id="standard-basic"
                                    label="Phone Number"
                                    variant="standard"
                                    value={values.cell_phone}
                                    onChange={handleChange("cell_phone")}
                                    placeholder="05_________"
                                    type="tel"
                                />
                                <TextField
                                    sx={{ m: 1, width: "100%" }}
                                    id="standard-basic"
                                    label="Department"
                                    variant="standard"
                                    value={values.department}
                                    onChange={handleChange("department")}
                                    placeholder="CS"
                                    type="text"
                                />
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={values.is_graduate}
                                                onChange={() => {
                                                    setValues({
                                                        ...values,
                                                        is_graduate:
                                                            !values.is_graduate,
                                                    });
                                                }}
                                                color="success"
                                            />
                                        }
                                        label="Is Graduate?"
                                    />
                                </FormGroup>
                            </>
                        )}

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 2, mb: 2 }}
                        >
                            Register
                        </Button>
                    </Box>
                </Box>
                {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
            </Container>
        </ThemeProvider>
    );
}

export default RegisterANewUser;
