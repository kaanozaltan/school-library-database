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
import TextareaAutosize from "@mui/material/TextareaAutosize";

import Select from "@material-ui/core/Select";
import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";
import { registerLibraryItem } from "../store/actions/all.actions.js";

const theme = createTheme();

function RegisterANewItem() {
    const [values, setValues] = useState({
        libraryItemType: "BOOK",
        title: "Advances in artifical intelligence: applications and theory",
        publish_year: 2019,
        publish_date: "2019-08-29",
        language: "English",
        publisher: "World Scientific,",
        description:
            "The book tells how to advances in artifical intelligence: applications and theory",
        volume: 20,
        issue: 20,
        edition: 20,
        print_location: "Ankara",
        authors: "Bezdek, James C.",
        call_no: "VM-10",
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    useEffect(() => {
        //console.log(values);
    }, [values]);

    const handleSubmit = (event) => {
        event.preventDefault();
        let data = values;
        data.publish_year = parseInt(values.publish_date.substring(0, 4));
        data.volume = parseInt(data.volume);
        data.issue = parseInt(data.issue);
        data.edition = parseInt(data.edition);
        dispatch(registerLibraryItem(data));
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    return (
        <ThemeProvider theme={theme}>
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
                        Register A Library Item
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
                            value={values.libraryItemType}
                            exclusive
                            style={{ margin: "auto", textAlign: "center" }}
                        >
                            <ToggleButton
                                value="BOOK"
                                style={{
                                    backgroundColor:
                                        values.libraryItemType == "BOOK"
                                            ? "#9ed0ff"
                                            : "",
                                }}
                                onClick={() => {
                                    setValues({
                                        ...values,
                                        ["libraryItemType"]: "BOOK",
                                    });
                                }}
                            >
                                Book
                            </ToggleButton>
                            <ToggleButton
                                value="JOURNAL"
                                style={{
                                    backgroundColor:
                                        values.libraryItemType == "JOURNAL"
                                            ? "#9ed0ff"
                                            : "",
                                }}
                                onClick={() => {
                                    setValues({
                                        ...values,
                                        ["libraryItemType"]: "JOURNAL",
                                    });
                                }}
                            >
                                Journal
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <TextField
                            sx={{ m: 1, width: "100%" }}
                            id="standard-basic"
                            label="Title"
                            variant="standard"
                            value={values.title}
                            onChange={handleChange("title")}
                            type="text"
                        />
                        <TextField
                            sx={{ m: 1, width: "100%" }}
                            id="standard-basic"
                            label="Publish Date"
                            variant="standard"
                            value={values.publish_date}
                            onChange={handleChange("publish_date")}
                            placeholder="yyyy-mm-dd"
                            type="text"
                        />
                        <TextField
                            sx={{ m: 1, width: "100%" }}
                            id="standard-basic"
                            label="Language"
                            variant="standard"
                            value={values.language}
                            onChange={handleChange("language")}
                            type="text"
                        />
                        <TextField
                            sx={{ m: 1, width: "100%" }}
                            id="standard-basic"
                            label="Description"
                            variant="standard"
                            value={values.description}
                            onChange={handleChange("description")}
                            placeholder="05_________"
                            type="tel"
                        />
                        <TextField
                            sx={{ m: 1, width: "100%" }}
                            id="standard-basic"
                            label="Publisher"
                            variant="standard"
                            value={values.publisher}
                            onChange={handleChange("publisher")}
                            placeholder=""
                            type="text"
                        />
                        <TextField
                            sx={{ m: 1, width: "100%" }}
                            id="standard-basic"
                            label="Authors"
                            variant="standard"
                            value={values.authors}
                            onChange={handleChange("authors")}
                            placeholder=""
                            type="text"
                        />
                        <TextField
                            sx={{ m: 1, width: "100%" }}
                            id="standard-basic"
                            label="Call Number"
                            variant="standard"
                            value={values.call_no}
                            onChange={handleChange("call_no")}
                            placeholder=""
                            type="text"
                        />
                        {values.libraryItemType == "BOOK" ? (
                            <>
                                <TextField
                                    sx={{ m: 1, width: "100%" }}
                                    id="standard-basic"
                                    label="Edition"
                                    variant="standard"
                                    value={values.edition}
                                    onChange={handleChange("edition")}
                                    placeholder=""
                                    type="text"
                                />
                                <TextField
                                    sx={{ m: 1, width: "100%" }}
                                    id="standard-basic"
                                    label="Print Location"
                                    variant="standard"
                                    value={values.print_location}
                                    onChange={handleChange("print_location")}
                                    placeholder=""
                                    type="text"
                                />
                            </>
                        ) : (
                            <>
                                <TextField
                                    sx={{ m: 1, width: "100%" }}
                                    id="standard-basic"
                                    label="Volume"
                                    variant="standard"
                                    value={values.volume}
                                    onChange={handleChange("volume")}
                                    placeholder=""
                                    type="number"
                                />
                                <TextField
                                    sx={{ m: 1, width: "100%" }}
                                    id="standard-basic"
                                    label="Issue"
                                    variant="standard"
                                    value={values.issue}
                                    onChange={handleChange("issue")}
                                    placeholder=""
                                    type="number"
                                />
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

export default RegisterANewItem;
