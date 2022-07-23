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
const theme = createTheme();
function Signup() {
    // const [values, setValues] = useState({
    //     email: "",
    //     password: "",
    //     name: "",
    //     cell_phone: "",
    //     user_id: "",
    //     showPassword: false,
    // });
    const [values, setValues] = useState({
        email: "servetggg@gmail.com",
        password: "123123123",
        name: "Servet",
        cell_phone: "05051461111",
        user_id: "21902473",
        showPassword: false,
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        //const data = new FormData(event.currentTarget);
        if (values.cell_phone.length != 11) {
            alert("Phone number is not valid");
            return;
        }
        const user = {
            email: values.email,
            password: values.password,
            cell_phone: values.cell_phone,
            name: values.name,
            user_id: values.user_id,
        };
        console.log(user);
        dispatch(userRegister(user, navigate));
    };
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };
    return (
        <ThemeProvider theme={theme}>
            <Link to="/login" variant="body2">
                <Button variant="contained" sx={{ mt: 4, ml: 4, mb: 2 }}>
                    Back to Login
                </Button>
            </Link>
            <Container component="main" maxWidth="xs">
                <CssBaseline />

                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        {/* <LockOutlinedIcon /> */}
                        <PersonAddIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Signup
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                    >
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
                            label="Name"
                            variant="standard"
                            value={values.name}
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
                        <FormControl
                            sx={{ m: 1, width: "100%" }}
                            variant="standard"
                        >
                            <InputLabel htmlFor="standard-adornment-password">
                                Password
                            </InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={values.showPassword ? "text" : "password"}
                                value={values.password}
                                onChange={handleChange("password")}
                                required
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
                                        >
                                            {values.showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControlLabel
                            control={
                                <Checkbox value="remember" color="primary" />
                            }
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 4, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to="/forgotPassword" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/signUp" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
            </Container>
        </ThemeProvider>
    );
}

export default Signup;
