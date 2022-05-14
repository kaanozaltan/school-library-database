const ManageLoginController = require("../controllers/ManageLoginController");
const ManageLibrarianController = require("../controllers/ManageLibrarianController");
const routes = (router) => {
    router.post("/login", new ManageLoginController().Login);
    router.post("/register", new ManageLoginController().Register);
    router.post(
        "/registerLibraryItem",
        new ManageLibrarianController().RegisterLibraryItem
    );
};

module.exports = routes;
