import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Switch,
    Route,
} from "react-router-dom";

import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Navbar from "./components/Navbar.js";
import Profile from "./components/Profile.js";
import Welcome from "./components/Welcome.js";
import RegisterANewUser from "./components/RegisterANewUser.js";
import LibraryItems from "./components/LibraryItems.js";
import AssignedItems from "./components/AssignedItems.js";
import MyItems from "./components/MyItems.js";
import Warnings from "./components/Warnings.js";
import Users from "./components/Users.js";
import RegisterANewItem from "./components/RegisterANewItem.js";
import Courses from "./components/Courses.js";
import Reports from "./components/Reports.js";

export default function PageRoutes() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Welcome />} />
                    <Route exact path="/login" element={<Login />} />
                    {/* <Route exact path="/signup" element={<Signup />} /> */}
                    <Route
                        exact
                        path="/registerANewUser"
                        element={<RegisterANewUser />}
                    />
                    <Route
                        exact
                        path="/libraryItems"
                        element={<LibraryItems />}
                    />
                    <Route
                        exact
                        path="/assignedItems"
                        element={<AssignedItems />}
                    />
                    <Route exact path="/myItems" element={<MyItems />} />
                    <Route exact path="/warnings" element={<Warnings />} />
                    <Route exact path="/users" element={<Users />} />
                    <Route exact path="/courses" element={<Courses />} />
                    <Route exact path="/reports" element={<Reports />} />
                    <Route
                        exact
                        path="/registerANewItem"
                        element={<RegisterANewItem />}
                    />
                </Routes>
            </div>
        </Router>
    );
}
